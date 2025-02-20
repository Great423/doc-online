import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { cn } from "@/lib/utils";
import { specialties } from '@/constants';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'medical', name: 'General Medicine' },
    { id: 'support', name: 'Support Services' },
    { id: 'wellness', name: 'Health & Wellness' }
  ];

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text, expanded) => {
    if (!expanded && text.length > 150) {
      return text.substring(0, 150) + '...';
    }
    return text;
  };

  const filteredSpecialties = specialties
    .filter(specialty => {
      const matchesCategory = selectedCategory === 'all' || specialty.category === selectedCategory;
      const searchTerm = searchQuery.toLowerCase().trim();
      const matchesSearch = searchTerm === '' || 
        specialty.name.toLowerCase().includes(searchTerm) ||
        specialty.description.toLowerCase().includes(searchTerm);
      
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Comprehensive Medical Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Designed for Your Complete Healthcare Journey
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={cn(
                  "h-12 px-6 rounded-full",
                  selectedCategory === category.id && "bg-primary text-white"
                )}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredSpecialties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No services found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpecialties.map((specialty, index) => {
                const Icon = specialty.icon;
                const isExpanded = expandedCards[index];
                
                return (
                  <Card 
                    key={index} 
                    className={cn(
                      "group h-full bg-white cursor-pointer",
                      "transition-all duration-500 ease-out",
                      "hover:shadow-2xl hover:scale-[1.02]",
                      specialty.glowColor
                    )}
                    onClick={() => toggleCard(index)}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col h-full space-y-6">
                        <div className="flex justify-between items-start">
                          <div className={cn(
                            "w-16 h-16 rounded-xl flex items-center justify-center",
                            "bg-opacity-10",
                            specialty.bgColor,
                            "transition-transform duration-500 ease-out",
                            "group-hover:rotate-6"
                          )}>
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-6 h-6 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                          )}
                        </div>

                        <div className="flex-grow space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {specialty.name}
                          </h3>
                          <p className="text-gray-600">
                            {truncateText(specialty.description, isExpanded)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;