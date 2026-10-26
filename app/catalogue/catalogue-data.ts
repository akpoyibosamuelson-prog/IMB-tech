export type CatalogueCategory = 'Solar Energy' | 'Electrical' | 'Electronics & Services';

export type CatalogueItem = {
  id: string;
  name: string;
  category: CatalogueCategory;
  image: string;
  summary: string;
  highlights: string[];
  badge?: string;
  supply: string;
  enquiryType: string;
};

export const categories: CatalogueCategory[] = ['Solar Energy', 'Electrical', 'Electronics & Services'];

export const catalogueItems: CatalogueItem[] = [
  {
    id: 'solar-panels',
    name: 'Monocrystalline Solar Panels',
    category: 'Solar Energy',
    image: '/images/catalogue/solar-panels.png',
    summary: 'High-efficiency panels for rooftop and ground-mount systems, sized to your load and roof space.',
    highlights: ['Residential and commercial sizes', 'Mounting rails and clamps available', 'Installation by IMB Tech technicians'],
    badge: 'Best seller',
    supply: 'Retail & wholesale',
    enquiryType: 'Solar installation',
  },
  {
    id: 'hybrid-inverter',
    name: 'Hybrid Solar Inverters',
    category: 'Solar Energy',
    image: '/images/catalogue/inverter.png',
    summary: 'Pure sine wave hybrid inverters that combine solar, battery and grid power for steady backup.',
    highlights: ['Multiple kVA ratings', 'Battery and grid ready', 'Configured and tested on site'],
    badge: 'Popular',
    supply: 'Retail & wholesale',
    enquiryType: 'Solar installation',
  },
  {
    id: 'lithium-battery',
    name: 'Lithium Battery Storage',
    category: 'Solar Energy',
    image: '/images/catalogue/lithium-battery.png',
    summary: 'Long-life LiFePO4 battery banks for homes and offices that need dependable overnight power.',
    highlights: ['Deep-cycle performance', 'Expandable capacity', 'Compatible with hybrid inverters'],
    supply: 'Retail & wholesale',
    enquiryType: 'Solar installation',
  },
  {
    id: 'charge-controller',
    name: 'MPPT Charge Controllers',
    category: 'Solar Energy',
    image: '/images/catalogue/charge-controller.png',
    summary: 'Efficient charge controllers that protect batteries and get more energy from every panel.',
    highlights: ['Digital monitoring display', 'Over-charge protection', 'Range of current ratings'],
    supply: 'Retail & wholesale',
    enquiryType: 'Materials enquiry',
  },
  {
    id: 'cables',
    name: 'Electrical & Solar Cables',
    category: 'Electrical',
    image: '/images/catalogue/cables.png',
    summary: 'Copper wiring and DC solar cables in common gauges for domestic, commercial and solar work.',
    highlights: ['Sold per metre or per roll', 'Colour-coded insulation', 'Bulk pricing for contractors'],
    badge: 'Bulk available',
    supply: 'Retail & wholesale',
    enquiryType: 'Materials enquiry',
  },
  {
    id: 'distribution-board',
    name: 'Distribution Boards & Breakers',
    category: 'Electrical',
    image: '/images/catalogue/distribution-board.png',
    summary: 'Distribution boards, MCBs, RCDs and surge protection to keep every circuit safe.',
    highlights: ['Single and three phase', 'Surge and earth-leakage protection', 'Neat professional fitting'],
    supply: 'Retail & wholesale',
    enquiryType: 'Materials enquiry',
  },
  {
    id: 'led-lighting',
    name: 'LED Lighting',
    category: 'Electrical',
    image: '/images/catalogue/led-lighting.png',
    summary: 'Energy-saving LED panels, bulbs and fittings for brighter spaces and lower power bills.',
    highlights: ['Indoor and outdoor options', 'Warm and daylight tones', 'Ideal for solar systems'],
    supply: 'Retail & wholesale',
    enquiryType: 'Materials enquiry',
  },
  {
    id: 'switches-sockets',
    name: 'Switches & Sockets',
    category: 'Electrical',
    image: '/images/catalogue/switches-sockets.png',
    summary: 'Durable modern switches, sockets and accessories for new builds and upgrades.',
    highlights: ['Single, double and multi-gang', 'Clean modern finish', 'Contractor packs available'],
    supply: 'Retail & wholesale',
    enquiryType: 'Materials enquiry',
  },
  {
    id: 'electronics-repair',
    name: 'Electronics Repair & Diagnostics',
    category: 'Electronics & Services',
    image: '/images/work/electronics-repair-bench.jpeg',
    summary: 'Board-level repair of inverters, controllers and power electronics on our test bench.',
    highlights: ['Inverter and UPS repair', 'Component-level fault finding', 'Tested before return'],
    badge: 'Service',
    supply: 'Workshop service',
    enquiryType: 'Electronics repair',
  },
  {
    id: 'solar-installation',
    name: 'Solar Installation Service',
    category: 'Electronics & Services',
    image: '/images/work/solar-rooftop-install.jpeg',
    summary: 'Complete solar design and installation, from load assessment to commissioning and handover.',
    highlights: ['Discuss your load and backup requirements', 'Safe rooftop mounting', 'Ask about maintenance support after installation'],
    badge: 'Service',
    supply: 'On-site service',
    enquiryType: 'Solar installation',
  },
];
