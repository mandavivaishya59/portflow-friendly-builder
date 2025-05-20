
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful features to showcase your work
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Everything you need to create a professional portfolio website that stands out from the crowd.
            </p>
            <Button size="lg" asChild>
              <Link to="/templates">Start Building Now</Link>
            </Button>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Templates
                </h2>
                <p className="text-gray-700 mb-6">
                  Choose from a variety of professionally designed templates that are optimized for different industries and purposes. Each template is fully customizable to match your brand and style.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-specific designs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fully customizable layouts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modern, clean designs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 aspect-video flex items-center justify-center">
                <img src="/placeholder.svg" alt="Professional Templates" className="max-w-full rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-lg p-6 aspect-video flex items-center justify-center">
                <img src="/placeholder.svg" alt="Easy Customization" className="max-w-full rounded" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Easy Customization
                </h2>
                <p className="text-gray-700 mb-6">
                  Our intuitive drag-and-drop editor makes it easy to customize your portfolio website without any coding knowledge. Change colors, fonts, layouts, and more with just a few clicks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Drag-and-drop interface</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No coding required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time preview</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Mobile Responsive
                </h2>
                <p className="text-gray-700 mb-6">
                  All our templates are fully responsive and look great on any device. Your portfolio will provide a seamless experience whether viewed on desktop, tablet, or mobile.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Works on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automatic image optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fast loading times</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 aspect-video flex items-center justify-center">
                <img src="/placeholder.svg" alt="Mobile Responsive" className="max-w-full rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to showcase your work?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start building your professional portfolio website today with our easy-to-use platform.
            </p>
            <Button size="lg" variant="default" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link to="/templates">Get Started For Free</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
