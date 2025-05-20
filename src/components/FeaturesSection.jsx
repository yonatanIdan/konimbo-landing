import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center space-y-12"
      >
        <h2 className="text-3xl font-bold text-[#90c138]">מה עוד תקבלו אצלנו?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-lg">
          <div>
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold mb-2">חנות דיגיטלית מלאה</h3>
            <p>פתרון מקיף למסחר אלקטרוני, כולל סליקה, משלוחים ומלאי.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">כלי שיווק מתקדמים</h3>
            <p>מערכת ניוזלטרים, קופונים, קידום ממומן ואינטגרציה עם רשתות חברתיות.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">אבטחה וביצועים</h3>
            <p>שרתים מהירים, תעודת SSL, גיבויים שוטפים והגנה מהתקפות.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
