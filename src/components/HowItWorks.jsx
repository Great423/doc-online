import React from 'react';
import { Card } from '@/components/ui/card';
import { UserCircle, Calendar, FileText, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCircle,
      title: "Fill Personal Details",
      description: "Start by providing your basic information including full name, contact details, and any symptoms or concerns you'd like to discuss.",
      keyPoints: [
        "Contact information",
        "Medical concerns",
        "Previous medical history"
      ]
    },
    {
      icon: Calendar,
      title: "Choose Appointment",
      description: "Select your preferred service and pick a date and time that works best for your schedule.",
      keyPoints: [
        "Select service type",
        "View available dates",
        "Pick convenient time slot"
      ]
    },
    {
      icon: CreditCard,
      title: "Complete Payment",
      description: "Secure your appointment by completing the payment process through our available payment methods.",
      keyPoints: [
        "Bank transfer",
        "Mobile money",
        "View service fees"
      ]
    },
    {
      icon: CheckCircle,
      title: "Receive Confirmation",
      description: "Get instant confirmation of your booking with all appointment details sent to your email.",
      keyPoints: [
        "Booking reference",
        "Appointment details",
        "Preparation instructions"
      ]
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900">
            How to Book Your Consultation
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Follow these simple steps to schedule your appointment with our healthcare professionals
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-[2.5rem] top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-transparent">
                  <ArrowRight className="absolute -bottom-4 -left-2 text-primary/40 rotate-90" />
                </div>
              )}
              
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="flex-shrink-0 flex justify-center md:block">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        Step {index + 1}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center md:text-left">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 mb-4 text-center md:text-left">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                      {step.keyPoints.map((point, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs md:text-sm"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;