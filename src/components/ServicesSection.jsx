import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Droplet, 
  Bone, 
  Eye,
  ArrowRight,
  Stethoscope,
  UserCog,
  Syringe,
  BookOpen,
  Activity,
  Scale
} from "lucide-react";
import { FaTooth } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { specialties } from '@/constants';

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-black bg-20" />
      </div>
      
      <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto py-24"
        >
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
              Comprehensive Medical Services
            </h2>
            <p className="text-gray-600 text-lg">
              Designed for Your Complete Healthcare Journey
            </p>
          </div>
          <CarouselContent className="-ml-2 md:-ml-4 pb-16 mt-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                  <Card className={cn(
                    "group h-full bg-white border-none",
                    "transition-all duration-500 ease-out",
                    "hover:shadow-2xl hover:scale-[1.02]",
                    specialty.glowColor
                  )}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col h-full space-y-6">
                        <div className={cn(
                          "w-16 h-16 rounded-xl flex items-center justify-center",
                          "bg-opacity-10 relative overflow-hidden",
                          specialty.bgColor,
                          "transition-transform duration-500 ease-out",
                          "group-hover:rotate-6"
                        )}>
                          <div className="absolute inset-0 opacity-10 mix-blend-overlay" />
                          <Icon className={`${specialty.textColor} w-8 h-8 relative z-10`} />
                        </div>
                        
                        <div className="flex-grow space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {specialty.name}
                          </h3>
                          <p className="text-gray-600 line-clamp-4">
                            {specialty.description}
                          </p>
                        </div>
                        
                        {/* <Button
                          asChild
                          className={cn(
                            "w-full group/button",
                            "transition-all duration-300",
                            "bg-gray-50 hover:bg-gray-100",
                            "text-primary hover:text-primary"
                          )}
                        >
                          <a href={specialty.link} className="flex items-center justify-between">
                            <span className="font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </a>
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className='w-full flex justify-center group'>
            <Link to="/doc-online/services">
              <Button size="lg" variant="outline" className="h-12 px-8 group-hover:text-primary">
                View All Services
              </Button>
            </Link>
          </div>
          <CarouselPrevious className={cn(
            "flex mt-72 md:mt-0 left-0 xl:-left-12 p-8",
            "bg-white/90 backdrop-blur-sm",
            "hover:bg-primary hover:text-white",
            "border-primary/10",
            "shadow-lg shadow-primary/[0.15]",
            "transition-all duration-300"
          )} />
          <CarouselNext className={cn(
            "flex mt-72 md:mt-0 right-0 xl:-right-12 p-8",
            "bg-white/90 backdrop-blur-sm",
            "hover:bg-primary hover:text-white",
            "border-primary/10",
            "shadow-lg shadow-primary/[0.15]",
            "transition-all duration-300"
          )} />
        </Carousel>
    </section>
  );
}