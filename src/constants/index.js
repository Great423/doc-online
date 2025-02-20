import { 
  Mail, 
  MessageSquare, 
  Phone,
  Stethoscope,
  UserCog,
  Syringe,
  Heart,
  BookOpen,
  Activity,
  Scale,
  ArrowRight,
  Search,
  Star
} from "lucide-react";

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: "+2348066748257",
    subtext: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: "support@doc-online.com",
    subtext: "Online 24/7",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    details: "Chat with our team",
    subtext: "Instant Response",
  },
];

export const locations = [
  {
    city: "Warri",
    address: "Effurun, GRA 330102",
    hours: "9:00 AM - 6:00 PM",
    phone: "+234 902 157 3173",
  }
];

export const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'medical', name: 'General Medicine' },
  { id: 'support', name: 'Support Services' },
  { id: 'wellness', name: 'Health & Wellness' }
];

export const specialties = [
  { 
    name: "General Medicine", 
    icon: Stethoscope,
    description: "Comprehensive health assessments, diagnosis and management of acute and chronic conditions, plus preventive care and wellness checks.", 
    category: 'medical',
    bgColor: "bg-primary",
    glowColor: "group-hover:shadow-primary/25"
  },
  { 
    name: "Health Advocacy", 
    icon: UserCog,
    description: "Expert guidance in understanding diagnoses, medication management, and coordinated care with specialists for informed medical decisions.", 
    category: 'support',
    bgColor: "bg-secondary",
    glowColor: "group-hover:shadow-secondary/25"
  },
  { 
    name: "Anesthesia & Perioperative", 
    icon: Syringe,
    description: "Complete perioperative care including preoperative evaluations, personalized anesthesia plans, and postoperative recovery guidance.", 
    category: 'medical',
    bgColor: "bg-primary",
    glowColor: "group-hover:shadow-primary/25"
  },
  { 
    name: "Health & Wellness Coaching", 
    icon: Heart,
    description: "Personalized lifestyle and dietary guidance, stress management techniques, and ongoing support for achieving your health goals.", 
    category: 'wellness',
    bgColor: "bg-secondary",
    glowColor: "group-hover:shadow-secondary/25"
  },
  { 
    name: "Patient Education", 
    icon: BookOpen,
    description: "Comprehensive education programs designed to empower patients with knowledge and understanding of their health conditions.", 
    category: 'medical',
    bgColor: "bg-primary",
    glowColor: "group-hover:shadow-primary/25"
  },
  { 
    name: "Preventive Care", 
    icon: Activity,
    description: "Proactive health maintenance through regular check-ups, screenings, and preventive wellness services.", 
    category: 'medical',
    bgColor: "bg-secondary",
    glowColor: "group-hover:shadow-secondary/25"
  },
  {
    name: "Prescription Services",
    icon: Syringe,
    description: "We provide general prescription services as well as prescription management. General Prescriptions: Our experienced physicians provide prescription services for common medical conditions including: Blood pressure medications, Diabetes management, Asthma and respiratory medications, Antibiotics for bacterial infections, Pain management medications… etc. Prescription Management: We offer comprehensive prescription management including: Regular medication reviews, Dosage adjustments, Side effect monitoring, Coordination with your preferred pharmacy, Prescription renewals and refills…etc",
    category: 'support',
    bgColor: "bg-secondary",
    glowColor: "group-hover:shadow-secondary/25"
  },
  {
    name: "Referral Services",
    icon: UserCog,
    description: "We provide specialist referrals and referral management services. Specialist Referrals – We coordinate referrals to specialized medical professionals including: Pediatricians, Cardiologists, Endocrinologists, Orthopedic specialists, General surgery specialists, Urologists, Dermatologists, Obstetrics and gynecologists, Mental health professionals, Physical therapists, Medical imaging services and more. Referral Management – our referral service includes: Prompt processing of referral requests, Documentation preparation, Follow-up coordination, Results tracking and Communication between healthcare providers.",
    category: 'support',
    bgColor: "bg-primary",
    glowColor: "group-hover:shadow-primary/25"
  }
];