
export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  demoUrl: string;
  features: string[];
  popular: boolean;
}

export const templates: Template[] = [
  {
    id: "minimal-portfolio",
    name: "Minimal Portfolio",
    description: "Clean, minimalist design perfect for showcasing creative work without distractions.",
    category: "Creative",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/minimal-portfolio",
    features: ["Responsive gallery", "About section", "Contact form"],
    popular: true
  },
  {
    id: "developer-resume",
    name: "Developer Resume",
    description: "Structured layout highlighting technical skills and professional experience.",
    category: "Professional",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/developer-resume",
    features: ["Skills matrix", "Project showcase", "GitHub integration"],
    popular: true
  },
  {
    id: "photography-gallery",
    name: "Photography Gallery",
    description: "Visual-focused template with large image displays and minimal text.",
    category: "Creative",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/photography-gallery",
    features: ["Fullscreen gallery", "Image lightbox", "Category filtering"],
    popular: false
  },
  {
    id: "business-professional",
    name: "Business Professional",
    description: "Polished design for consultants and business professionals.",
    category: "Professional",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/business-professional",
    features: ["Services section", "Testimonials", "Appointment booking"],
    popular: false
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    description: "Bold, creative layout with emphasis on visual work and branding.",
    category: "Creative",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/graphic-designer",
    features: ["Project categorization", "Case studies", "Brand showcase"],
    popular: true
  },
  {
    id: "writer-blog",
    name: "Writer's Portfolio",
    description: "Text-focused design for authors, journalists, and content creators.",
    category: "Content",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/writer-blog",
    features: ["Blog integration", "Publication showcase", "Reading time estimates"],
    popular: false
  },
  {
    id: "architect-showcase",
    name: "Architect Showcase",
    description: "Elegant layout featuring architectural projects with detailed case studies.",
    category: "Professional",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/architect-showcase",
    features: ["Project timeline", "3D model integration", "Client testimonials"],
    popular: false
  },
  {
    id: "musician-artist",
    name: "Musician/Artist",
    description: "Dynamic template for musicians and performers with media integration.",
    category: "Creative",
    imageUrl: "/placeholder.svg",
    demoUrl: "/templates/musician-artist",
    features: ["Music player", "Tour dates", "Video gallery"],
    popular: true
  }
];

export const categories = Array.from(new Set(templates.map(template => template.category)));

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};
