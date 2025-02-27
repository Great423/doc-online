import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Phone, Clock, Award, Users, Heart, ChevronRight, Star } from 'lucide-react';
import CallToAction from '@/components/CallToAction';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const features = [
    {
      title: "Expertise",
      description: "Highly qualified medical professionals dedicated to your well-being.",
      icon: Award
    },
    {
      title: "Convenience",
      description: "Virtual consultations and telemedicine services to fit into your schedule.",
      icon: Clock
    },
    {
      title: "Comprehensive Services",
      description: "Routine check-ups, specialized treatments, and preventive care.",
      icon: Heart
    },
    {
      title: "Patient Education",
      description: "Empowering you with knowledge about your condition and treatments.",
      icon: Users
    }
  ];

  const doctors = [
    {
      name: "Dr. Margaret Odili",
      role: "CEO & Chief Medical Director",
      specialization: "Anaesthesia and General Medicine",
      experience: "40+ Years Experience",
      education: [
        "MBBS, University of Benin",
        "MPH, Public Health, St. Georges' University",
        "Clinical Tutor, St. George's University"
      ],
      image: "/doc-online/assets/dinisuceo3.jpg",
      isCEO: true
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Physician",
      specialization: "Internal Medicine",
      experience: "15+ Years Experience",
      education: ["MBBS, University of Lagos", "Fellowship in Internal Medicine"],
      image: ""
    },
    {
      name: "Dr. Michael Chen",
      role: "Specialist",
      specialization: "Cardiology",
      experience: "12+ Years Experience",
      education: ["MD, Stanford University", "Cardiology Residency"],
      image: ""
    },
    {
      name: "Dr. Amanda Peters",
      role: "General Practitioner",
      specialization: "Family Medicine",
      experience: "8+ Years Experience",
      education: ["MBBS, University of Ibadan", "Family Medicine Certification"],
      image: ""
    }
  ];

  const faqs = [
    {
      question: "What is Dinisu Clinic?",
      answer: "Dinisu Clinic provides modern general medicine and wellness care."
    },
    {
      question: "How does Dinisu Clinic work?",
      answer: "Simply register, schedule an appointment, and connect with your doctor either virtually or in person."
    },
    {
      question: "Is Dinisu Clinic only for specific medical conditions?",
      answer: "We offer general medicine consultations and we also have an extensive network of specialists to help you complete your health care needs."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can schedule an appointment online or call our office at [phone number]."
    },
    {
      question: "Do you accept insurance?",
      answer: "No, we do not accept insurance schemes at this time. We expect payment before consultation."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your ID and a list of any medications you're currently taking."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-8 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-0 right-0 w-0 md:w-1/2 h-full bg-gray-50 clip-diagonal" />
        
        <div className="container mx-auto px-4 lg:px-20 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 max-w-2xl order-2 lg:order-1">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-primary"/>
                  <span className="text-primary font-medium text-sm md:text-base">About Dinisu Clinic</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Who We <span className="text-primary">Are</span>
                </h1>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                At Dinisu Clinic, we combine medical excellence with personalized care to ensure every patient receives the attention they deserve. With years of experience in general medicine, perioperative care, and health advocacy, our approach is holistic, addressing your physical, emotional, and overall well-being.
              </p>

              <div className="space-y-4 md:space-y-6 bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Our Philosophy</h2>
                <p className="text-base md:text-lg text-gray-600">
                  We believe in empowering our patients through education and proactive health management. Whether you're preparing for surgery, managing a chronic condition, or seeking lifestyle improvements, we're here to guide you every step of the way.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link to="/doc-online/booking">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Book Appointment
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="gap-2 group w-full sm:w-auto">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary/70" />
                  {/* <span className="text-primary group-hover:text-primary/70 text-sm md:text-base">+234 902 157 3173</span> */}
                  <span className="text-primary group-hover:text-primary/70 text-sm md:text-base">+234 814 365 2750</span>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[35vh] md:h-[70vh] w-full rounded-xl md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl aspect-[4/5]">
                <img 
                  src="/doc-online/assets/doctor-patient.jpg" 
                  className="h-full w-full object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                  alt="doctor-patient" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 md:-bottom-8 left-0 md:-left-8 bg-white p-4 md:p-6 rounded-tl-none rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-2xl md:text-4xl font-bold text-primary">40+</p>
                    <p className="text-xs md:text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-2xl md:text-4xl font-bold text-primary">24/7</p>
                    <p className="text-xs md:text-sm text-gray-600">Virtual Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-primary/80 text-white">
        <img src="/doc-online/assets/cta.jpg" className='absolute top-0 -z-20 object-cover w-full h-full' alt="cta" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[
              { number: "40+", label: "Years Experience" },
              { number: "Multi-disciplinary", label: "Care" },
              { number: "24/7", label: "Virtual Visits" }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Meet Our Medical Team
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Our team of distinguished healthcare professionals brings together decades of experience 
            and expertise to provide you with exceptional medical care.
          </p>
        </div>

        {/* CEO Feature */}
        <div className="">
          <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
              {/* CEO Image for Mobile - Shows at top on mobile */}
              <div className="lg:hidden relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                <img
                  src={doctors[0].image}
                  alt={doctors[0].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-4 md:p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="h-1 w-12 bg-primary rounded-full"></div>
                  <span className="text-primary font-medium text-sm md:text-base">Leadership</span>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">{doctors[0].name}</h3>
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full text-primary font-medium text-sm md:text-base">
                      <Award className="h-4 w-4 md:h-5 md:w-5" />
                      {doctors[0].role}
                    </div>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    With over four decades of medical excellence, Dr. Odili leads our team with 
                    unparalleled expertise and a vision for innovative healthcare solutions that 
                    put patients first.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        <span className="font-medium text-sm md:text-base">{doctors[0].specialization}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        <span className="font-medium text-sm md:text-base">{doctors[0].experience}</span>
                      </div>
                    </div>

                    <div className="space-y-3 border-t md:border-t-0 md:border-l pt-3 md:pt-0 md:pl-6">
                      {doctors[0].education.map((edu, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                          <span>{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CEO Image for Desktop - Hidden on mobile */}
              <div className="hidden lg:block lg:col-span-2 relative h-[30rem]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                <img
                  src={doctors[0].image}
                  alt={doctors[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg z-20">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-sm md:text-base">4.9</span>
                    <span className="text-gray-600 text-xs md:text-sm">(2000+ Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Doctors Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.slice(1).map((doctor, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="relative mb-6 md:mb-8 aspect-square rounded-xl md:rounded-2xl overflow-hidden w-full h-[16rem] md:h-[18rem] lg:h-[20rem] bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary/20" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-primary/80 font-medium text-sm md:text-base">{doctor.role}</p>
                  </div>

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-gray-600 text-sm md:text-base">{doctor.specialization}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-gray-600 text-sm md:text-base">{doctor.experience}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>

      {/* Activities Gallery */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Clinic Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Patient Consultation", type: "video" },
              { title: "Medical Procedures", src: '/doc-online/assets/doctor-patient.jpg', type: "image" },
              { title: "Lab Analysis", src: '/doc-online/assets/doctors-working2.webp', type: "image" },
              // { title: "Emergency Care", src: '',  type: "video" },
              { title: "Physical Therapy", src: '/doc-online/assets/doctors-working2.webp', type: "image" },
              // { title: "Team Meetings", src: '',  type: "video" }
            ].map((item, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden group">
                {item.type === "image" ?
                  <img
                    src={`${item.src}`}
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                  /> : 
                  <video
                    src="/doc-online/assets/medical-video.mp4"
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                    muted
                    controls
                  />}
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* call to action */}
      <CallToAction />
    </div>
  );
};

export default AboutUs;