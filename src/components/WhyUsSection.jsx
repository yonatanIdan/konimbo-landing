import { motion } from "framer-motion";
import konimboImage from '../assets/konimbo.png';

export default function WhyUsSection() {
  return (
    <section className="py-20 px-6 bg-[#f9f9f9]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-[#90c138]">למה לבחור בנו?</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>מערכת ניהול מתקדמת ונוחה</li>
            <li>עיצוב מודרני רספונסיבי</li>
            <li>התאמה מלאה לקידום בגוגל</li>
            <li>תמיכה מקצועית בעברית</li>
          </ul>
          <a href="#contact-form" className="inline-block mt-4 bg-[#90c138] hover:bg-[#7cb52e] text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            רוצה לדבר עם נציג?
          </a>
        </div>
        <img
          src={konimboImage}
          alt="דוגמת אתר קונימבו"
          className="md:w-1/2 rounded-2xl shadow-xl object-cover max-h-96 w-full"
        />
      </motion.div>
    </section>
  );
}
