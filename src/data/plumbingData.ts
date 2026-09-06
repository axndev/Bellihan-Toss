import { PlumbingService, FAQItem, Review } from '../types';

export const BUSINESS_INFO = {
  name: 'Bellihan Toss',
  fullName: 'Bellihan Toss Plumbing',
  tagline: 'Reliable Plumbing. Fair Prices. Quality Work.',
  subTagline: 'Dependable residential and commercial plumbing services you can count on. Professional workmanship, honest service, and solutions that get the job done right.',
  motto: 'Quality Work. Honest Service. Clean Results.',
  phone: '(555) 382-7473',
  phoneClean: '5553827473',
  email: 'contact@bellihantoss.com',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61593637319732',
  facebookFollowers: '500+',
  serviceArea: 'Serving our local communities, residential neighborhoods, and commercial properties',
  businessHours: 'Monday – Saturday: 7:00 AM – 7:00 PM | Emergency Services Available',
};

export const TRUST_POINTS = [
  {
    title: 'Reliable Service',
    description: 'On-time arrivals, clear communication, and dependable fixes you can count on.',
  },
  {
    title: 'Fair & Honest Pricing',
    description: 'Upfront quotes with no hidden charges, honest assessments, and fair rates.',
  },
  {
    title: 'Residential & Commercial',
    description: 'Equipped to handle household repairs, apartment buildings, and commercial facilities.',
  },
  {
    title: 'Professional Workmanship',
    description: 'Quality tools, clean job sites, and durable repairs built to last.',
  },
];

export const ABOUT_CHECKLIST = [
  'Dependable service',
  'Fair pricing',
  'Quality workmanship',
  'Residential & commercial work',
  'Customer-focused service',
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Tell Us About Your Plumbing Problem',
    description:
      'Give us a call or send a quick message detailing what is leaking, clogged, or needs new installation.',
  },
  {
    step: '02',
    title: 'Get a Clear Quote',
    description:
      'We provide honest pricing and clear solutions tailored to your property before any work begins.',
  },
  {
    step: '03',
    title: 'We Get the Job Done',
    description:
      'Our plumber arrives with proper tools, completes the work with quality craftsmanship, and leaves your space tidy.',
  },
];

export const PLUMBING_SERVICES: PlumbingService[] = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    description: 'Rapid response for sudden burst pipes, severe leaks, overflowing fixtures, and urgent plumbing crises.',
    highlights: ['Burst pipe isolation', 'Active water shut-off', 'Urgent leak mitigation'],
    iconName: 'AlertTriangle',
    category: 'emergency',
  },
  {
    id: 'leak-repairs',
    title: 'Leak Repairs',
    description: 'Accurate pinpointing and dependable repair of hidden water leaks beneath sinks, behind drywall, or in crawlspaces.',
    highlights: ['Non-invasive leak detection', 'Joint & seal re-seating', 'Moisture prevention'],
    iconName: 'Droplet',
    category: 'both',
  },
  {
    id: 'water-tank-installation',
    title: 'Water Tank Installation',
    description: 'Professional setup, replacement, and servicing for residential and commercial hot water tanks and water storage systems.',
    highlights: ['Hot water tank swaps', 'Thermostat & element checks', 'Pressure relief valves'],
    iconName: 'Flame',
    category: 'both',
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Clearing stubborn clogs from kitchen sinks, bathroom showers, tubs, floor drains, and sewer branch lines.',
    highlights: ['Heavy clog clearing', 'Rooter & snake service', 'Flow restoration'],
    iconName: 'RotateCcw',
    category: 'both',
  },
  {
    id: 'pipe-repairs',
    title: 'Pipe Repairs',
    description: 'Fixing cracked, corroded, loose, or vibrating copper, PEX, and PVC pipes with durable structural connections.',
    highlights: ['PEX & copper repairs', 'Corrosion replacements', 'Vibration dampening'],
    iconName: 'Wrench',
    category: 'both',
  },
  {
    id: 'faucet-fixture-repair',
    title: 'Faucet & Fixture Repair',
    description: 'Repairing or replacing dripping faucets, shower heads, vanity fixtures, hose bibbs, and kitchen sprayers.',
    highlights: ['Cartridge replacements', 'New fixture installs', 'Drip & pressure fixes'],
    iconName: 'Settings',
    category: 'residential',
  },
  {
    id: 'toilet-repairs',
    title: 'Toilet Repairs',
    description: 'Solving running toilets, weak flushes, damaged wax seals, bowl leaks, and stubborn toilet blockages.',
    highlights: ['Flapper & valve rebuilds', 'Wax ring resealing', 'Unclogging & stabilization'],
    iconName: 'Sparkles',
    category: 'both',
  },
  {
    id: 'residential-plumbing',
    title: 'Residential Plumbing',
    description: 'Comprehensive plumbing maintenance, renovation rough-ins, and fixture upgrades for single-family homes & apartments.',
    highlights: ['Kitchen & bath upgrades', 'Home water shut-offs', 'Routine maintenance'],
    iconName: 'Home',
    category: 'residential',
  },
  {
    id: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    description: 'Heavy-duty plumbing services for local businesses, offices, retail spaces, restaurants, and rental facilities.',
    highlights: ['Commercial rest rooms', 'Backflow prevention', 'Scheduled maintenance'],
    iconName: 'Building2',
    category: 'commercial',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you handle residential and commercial plumbing?',
    answer:
      'Yes! Bellihan Toss provides dependable plumbing solutions for both homeowners and commercial properties, including office buildings, retail shops, and multi-unit residential buildings.',
  },
  {
    question: 'What plumbing problems can you help with?',
    answer:
      'We handle a broad spectrum of plumbing issues: active water leaks, pipe repairs and replacements, clogged sinks and drains, toilet repairs, faucet and fixture replacements, water tank setups, and emergency plumbing calls.',
  },
  {
    question: 'Do you install water tanks?',
    answer:
      'Yes. We install, replace, and service residential and commercial hot water tanks and water heater units, ensuring safe connections, correct pressure settings, and clean installations.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'You can request a free quote anytime through our online quote form, send us a message, or give us a direct phone call. Describe what you need, and we will provide clear, honest pricing.',
  },
  {
    question: 'How quickly can I get help?',
    answer:
      'For urgent plumbing emergencies like major leaks or burst pipes, we prioritize rapid local dispatch to secure your water lines as quickly as possible. For standard repairs and installations, we offer convenient same-day and scheduled booking windows.',
  },
];

// Clearly structured testimonials for local plumbing work (ready for real reviews)
export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Local Homeowner',
    location: 'Residential Customer',
    serviceType: 'Water Tank Installation',
    rating: 5,
    text: 'Bellihan Toss responded quickly when our hot water tank started leaking. They gave an honest quote, arrived on time, and finished the installation cleanly with zero hassle.',
    date: 'Recent Project',
  },
  {
    id: 'rev-2',
    author: 'Property Manager',
    location: 'Commercial Building',
    serviceType: 'Pipe & Fixture Repair',
    rating: 5,
    text: 'Dependable service from start to finish. They fixed recurring pipe pressure issues across two commercial units with fair pricing and top-tier workmanship.',
    date: 'Recent Project',
  },
  {
    id: 'rev-3',
    author: 'Local Resident',
    location: 'Residential Customer',
    serviceType: 'Emergency Leak Repair',
    rating: 5,
    text: 'Had an unexpected pipe leak behind our laundry wall. They isolated the line quickly, replaced the damaged section, and left the workspace clean and tidy.',
    date: 'Recent Project',
  },
];
