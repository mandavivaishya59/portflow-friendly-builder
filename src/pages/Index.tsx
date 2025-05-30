
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { templates } from "@/data/templates";
import TemplateCard from "@/components/TemplateCard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredTemplates = templates.filter(t => t.popular).slice(0, 3);
  
  // Store the Google Maps API key for AI assistant integration
  const aiAssistantApiKey = "AIzaSyAidKfGC1_9iBy1I-052V-ohjx7b2PNYYM";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E0FFF9] to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Build your AI-powered portfolio website in minutes
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Portflow.ai offers intelligent, customizable templates that adapt to your content and help you create a portfolio website that stands out.
              No coding required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/templates">Browse Templates</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Templates</h2>
            <Link to="/templates" className="text-primary hover:text-accent flex items-center font-medium">
              <span>View all templates</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#F0FFFC]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose Portflow.ai?</h2>
            <p className="text-lg text-gray-700">
              Our AI-driven platform makes it easy to create a professional portfolio website that adapts to your content and audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C5FFF6] flex items-center justify-center rounded-lg mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Templates</h3>
              <p className="text-gray-600">
                Choose from intelligent templates that adapt to your content and help you showcase your work effectively.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C5FFF6] flex items-center justify-center rounded-lg mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Customization</h3>
              <p className="text-gray-600">
                Our AI helps you customize colors, fonts, and layouts based on your preferences and industry best practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C5FFF6] flex items-center justify-center rounded-lg mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Responsiveness</h3>
              <p className="text-gray-600">
                Portflow.ai ensures your portfolio looks perfect on any device through AI-optimized layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to create your AI-powered portfolio?</h2>
          <p className="text-xl text-[#E0FFF9] mb-8 max-w-2xl mx-auto">
            Get started today and have your intelligent professional portfolio online in minutes.
          </p>
          <Button size="lg" variant="default" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link to="/templates">Get Started For Free</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
