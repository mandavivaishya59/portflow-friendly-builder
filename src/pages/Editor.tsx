
import { useParams, Navigate } from "react-router-dom";
import { getTemplateById } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Editor = () => {
  const { id } = useParams<{ id: string }>();
  const template = id ? getTemplateById(id) : undefined;
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  // If template doesn't exist, redirect to templates page
  if (!template) {
    return <Navigate to="/templates" />;
  }

  const handleSave = () => {
    setSaving(true);
    
    // Simulate saving process
    setTimeout(() => {
      setSaving(false);
      toast({
        title: "Changes saved",
        description: "Your portfolio has been updated successfully.",
      });
    }, 1500);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Editor Header */}
      <header className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-semibold text-primary">Portflow</span>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-gray-600 text-sm">{template.name}</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Preview</Button>
            <Button size="sm" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
            <Button size="sm" variant="default">Publish</Button>
          </div>
        </div>
      </header>

      {/* Editor Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
          <h3 className="font-medium text-gray-700 mb-4">Editor Tools</h3>
          <div className="space-y-2">
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Pages</div>
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Sections</div>
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Elements</div>
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Media</div>
            <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Settings</div>
          </div>
        </div>
        
        {/* Main editor area */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Template Editor Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              You've selected the {template.name} template. In the full version, 
              you'll be able to customize this template to create your perfect portfolio.
            </p>
            <img 
              src={template.imageUrl} 
              alt={template.name} 
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <div className="flex justify-center">
              <Button onClick={handleSave}>
                Save Template Selection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
