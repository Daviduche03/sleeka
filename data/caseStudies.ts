export interface CaseStudy {
  id: string;
  title: string;
  tags: string;
  overview: string;
  problem: string;
  solution: string;
  results: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'felicia-transport',
    title: 'Felicia Transport',
    tags: 'Branding, Identity design, Merchandise',
    overview:
      'Felicia Transport is a public transport company in Nigeria, focused on reliable, safe, and modern mobility. They needed a strong brand identity to stand out and earn public trust.',
    problem:
      'As a new company, Felicia lacked a recognizable image. Without strong branding, it risked being overlooked in a competitive market and missing early adoption momentum.',
    solution:
      'We created a complete brand identity system, logo, colors, and visual assets, reflecting motion, trust, and innovation. The branding was applied across buses, uniforms, signage, and digital platforms, ensuring consistent visibility and recognition.',
    results: [
      'The launch went viral across local media and social platforms.',
      'Over 42,000 organic impressions within 48 hours of the brand reveal.',
      'A 35% spike in web traffic during the launch week.',
    ],
    image: '/assets/works/VanDesign.jpg',
  },
  {
    id: 'premiabn',
    title: 'PremiaBN',
    tags: 'Illustration, Animated explainer video',
    overview:
      'PremiaBN needed engaging visual content to explain their complex services in a simple, memorable way.',
    problem:
      'Their services were difficult to communicate through traditional marketing, leading to low engagement and understanding from potential customers.',
    solution:
      'We created custom illustrations and an animated explainer video that broke down their services into digestible, visually appealing content that resonated with their target audience.',
    results: [
      'Video engagement rate increased by 65%.',
      'Customer inquiries doubled within the first month.',
      'Social media shares increased by 120%.',
    ],
    image: '/assets/works/2.jpg',
  },
  {
    id: 'bluechip-technologies',
    title: 'Bluechip Technologies',
    tags: 'Motion, Video editing',
    overview:
      'Bluechip Technologies required professional video content to showcase their tech solutions and establish thought leadership in the industry.',
    problem:
      'Their existing content lacked the polish and professionalism needed to compete with larger tech companies, affecting their credibility.',
    solution:
      'We produced high-quality motion graphics and edited video content that elevated their brand presence, combining technical accuracy with compelling storytelling.',
    results: [
      'Brand perception improved by 45% in target market surveys.',
      'Video content generated 50,000+ views across platforms.',
      'Secured 3 major enterprise clients directly from video campaigns.',
    ],
    image: '/assets/works/Olumide Soyombo Bluechip_1000.jpg',
  },
  {
    id: 'emsxchange',
    title: 'EmsXchange',
    tags: 'Design, Motion, Video editing',
    overview:
      'EmsXchange needed a complete visual overhaul to match their innovative platform with equally innovative creative content.',
    problem:
      'Their visual identity was inconsistent across platforms, creating confusion and reducing trust among potential users.',
    solution:
      'We developed a cohesive design system, created motion graphics for their platform, and produced video content that unified their brand message across all touchpoints.',
    results: [
      'User sign-ups increased by 78% post-rebrand.',
      'Platform engagement time increased by 40%.',
      'Won "Best Design" award at industry conference.',
    ],
    image: '/assets/works/Big5Annoucement.jpg',
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === id);
};
