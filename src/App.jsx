import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import './App.css';

export default function App() {
  return (
    <div className="text-[#333333] bg-[#f2f2f2] scroll-smooth">
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
}
