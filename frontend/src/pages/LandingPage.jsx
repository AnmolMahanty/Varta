import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import {
  MessageSquare,
  Image,
  Shield,
  Palette,
  ArrowRight,
  Globe,
  Lock,
  Zap,
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  // Handle button clicks for navigation
  const handleNavigation = (path) => {
    if (path.startsWith('#')) {
        document.querySelector(path).scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path);
      }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Connect Instantly with <span className="text-primary">Anyone</span>
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Real-time messaging platform with powerful features, customizable
          themes, and secure communication for everyone.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="btn btn-primary flex items-center"
            onClick={() => handleNavigation("/login")}
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            className="btn btn-outline"
            onClick={() => handleNavigation("#features")}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="text-primary">Varta</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="Real-Time Chat"
            description="Instant messaging with zero lag. Connect with anyone, anywhere in the world."
          />
          <FeatureCard
            icon={<Image className="h-8 w-8 text-primary" />}
            title="Image Sharing"
            description="Share moments instantly with built-in image sharing capabilities."
          />
          <FeatureCard
            icon={<Lock className="h-8 w-8 text-primary" />}
            title="Secure Communication"
            description="End-to-end encryption ensures your conversations stay private."
          />
          <FeatureCard
            icon={<Palette className="h-8 w-8 text-primary" />}
            title="32 Unique Themes"
            description="Personalize your chat experience with our diverse theme collection."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-primary" />}
            title="Privacy First"
            description="Your data is protected with state-of-the-art security measures."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-primary" />}
            title="Lightning Fast"
            description="Optimized performance for a smooth messaging experience."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-neutral-content py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-6 w-6" />
                <span className="text-xl font-bold">Varta</span>
              </div>
              <p className="text-gray-400">
                Connecting people through secure real-time communication.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Security</li>
                <li>Themes</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LandingPage;
