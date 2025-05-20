import { motion } from "framer-motion";
import headerBg from '../assets/header-bg.png';

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center bg-opacity-50 justify-center text-center px-6 py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-3xl relative z-10 text-white bg-zinc-300/70 rounded-xl py-3"
      >
        <h1 className="text-4xl md:text-5xl text-black font-bold text-shadow-lg/30 text-[#90c138] mb-6">
          קונימבו - הפלטפורמה המושלמת לעסק שלך
        </h1>
        <p className="text-xl md:text-3xl text-black font-bold text-shadow-lg/20 mb-8">
          אתר מקצועי, חנות דיגיטלית ונראות מושלמת – הכל במקום אחד.
        </p>
        <a href="#contact-form" className="inline-block bg-[#90c138] hover:bg-[#7cb52e] text-xl text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
          דברו איתנו
        </a>
      </motion.div>
    </section>
  );
}
