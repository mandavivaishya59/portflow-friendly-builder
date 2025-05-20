
import { Button } from "@/components/ui/button";
import { Template } from "@/data/templates";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <div className="template-card group overflow-hidden">
      <div className="relative aspect-[16/10]">
        <img 
          src={template.imageUrl} 
          alt={template.name} 
          className="w-full h-full object-cover"
        />
        <div className="template-hover-overlay">
          <div className="flex flex-col gap-3">
            <Link to={`/templates/${template.id}`}>
              <Button className="px-4">Preview</Button>
            </Link>
            <Link to={`/editor/${template.id}`}>
              <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 px-4">
                Use Template
              </Button>
            </Link>
          </div>
        </div>
        {template.popular && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900">{template.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{template.category}</p>
          </div>
          <Link 
            to={`/templates/${template.id}`}
            className="text-primary hover:text-accent flex items-center text-sm font-medium"
          >
            <span>View</span>
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
