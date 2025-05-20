
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start mb-2">
    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose the plan that's right for you and start building your professional portfolio website today.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <hr className="mb-6" />
                <ul className="space-y-3 mb-8">
                  <PlanFeature>1 portfolio website</PlanFeature>
                  <PlanFeature>Basic templates</PlanFeature>
                  <PlanFeature>Mobile responsive</PlanFeature>
                  <PlanFeature>Portflow subdomain</PlanFeature>
                  <PlanFeature>Community support</PlanFeature>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </div>
              
              {/* Pro Plan */}
              <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-md relative">
                <div className="absolute top-0 right-0 -mt-3 mr-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <hr className="mb-6" />
                <ul className="space-y-3 mb-8">
                  <PlanFeature>1 portfolio website</PlanFeature>
                  <PlanFeature>All templates</PlanFeature>
                  <PlanFeature>Mobile responsive</PlanFeature>
                  <PlanFeature>Custom domain</PlanFeature>
                  <PlanFeature>Analytics</PlanFeature>
                  <PlanFeature>Priority support</PlanFeature>
                  <PlanFeature>Remove Portflow branding</PlanFeature>
                </ul>
                <Button className="w-full">Choose Pro</Button>
              </div>
              
              {/* Teams Plan */}
              <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Teams</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <hr className="mb-6" />
                <ul className="space-y-3 mb-8">
                  <PlanFeature>5 portfolio websites</PlanFeature>
                  <PlanFeature>All templates</PlanFeature>
                  <PlanFeature>Mobile responsive</PlanFeature>
                  <PlanFeature>Custom domains</PlanFeature>
                  <PlanFeature>Advanced analytics</PlanFeature>
                  <PlanFeature>Team collaboration</PlanFeature>
                  <PlanFeature>Remove Portflow branding</PlanFeature>
                  <PlanFeature>Dedicated support</PlanFeature>
                </ul>
                <Button variant="outline" className="w-full">Choose Teams</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can I switch plans later?
                </h3>
                <p className="text-gray-700">
                  Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to all features in the new plan. When you downgrade, the changes will take effect at the end of your current billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Do I need technical skills to use Portflow?
                </h3>
                <p className="text-gray-700">
                  Not at all! Portflow is designed to be user-friendly for everyone. Our intuitive drag-and-drop editor makes it easy to create and customize your portfolio website without any coding or design skills.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Can I use my own domain name?
                </h3>
                <p className="text-gray-700">
                  Yes, on the Pro and Teams plans you can connect your own custom domain. We provide easy instructions on how to set up your domain with your Portflow website.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also support PayPal for recurring payments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
