
import { useParams, Link, Navigate } from "react-router-dom";
import { getTemplateById } from "@/data/templates";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

const TemplateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const template = id ? getTemplateById(id) : undefined;

  // If template doesn't exist, redirect to templates page
  if (!template) {
    return <Navigate to="/templates" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Back link */}
          <Link 
            to="/templates" 
            className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to templates</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Template Preview */}
            <div>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={template.imageUrl} 
                  alt={template.name} 
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </div>

            {/* Template Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{template.name}</h1>
              <p className="text-gray-500 mb-6">{template.category}</p>
              <p className="text-gray-700 mb-8">{template.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Template Features</h2>
                <ul className="space-y-2">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                        <Check size={12} className="text-green-600" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link to={`/editor/${template.id}`}>Use This Template</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Preview
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TemplateDetail;
