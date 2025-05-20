import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactForm from "./components/ContactForm";
import { motion } from "framer-motion";
import './App.css';

export default function App() {
  return (
    <div className="text-[#333333] bg-[#f2f2f2] scroll-smooth">
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />

      <section id="contact-form" className="bg-[#f9f9f9] py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#90c138] mb-8">צרו איתנו קשר</h2>
          <ContactForm />
        </motion.div>
      </section>
    </div>
  );
}
