import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.airtable.com/v0/appZdoerwAgw7o8aE/Form", {
        method: "POST",
        headers: {
          Authorization: "Bearer patQ18frvvnNrVKzc.78df9d5cc175c3d2e8d21f447af5fc9b3589bcbf1bd0cb29a05a31de6ec3db29",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields: {
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Message: formData.message
          }
        })
      });

      if (response.ok) {
        setSuccessMsg("הטופס נשלח בהצלחה!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMsg("אירעה שגיאה בשליחת הטופס.");
      }
    } catch (error) {
      setErrorMsg("אין חיבור לשרת. נסה שוב מאוחר יותר.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8 rounded-2xl shadow-2xl max-w-xl mx-auto border border-gray-300">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">צור קשר</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* שם */}
        <div className="relative">
          <FaUser className="absolute left-4 top-4 text-gray-400" />
          <input
            name="name"
            placeholder="שם מלא"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#90c138] shadow-sm"
          />
        </div>

        {/* אימייל */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#90c138] shadow-sm"
          />
        </div>

        {/* טלפון */}
        <div className="relative">
          <FaPhone className="absolute left-4 top-4 text-gray-400" />
          <input
            name="phone"
            placeholder="טלפון"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#90c138] shadow-sm"
          />
        </div>

        {/* הודעה */}
        <div className="relative">
          <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
          <textarea
            name="message"
            placeholder="הודעה"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#90c138] shadow-sm resize-none"
          />
        </div>

        {/* כפתור */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#90c138] hover:bg-[#7dab29] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          {loading ? "שולח..." : "שלח"}
        </button>

        {/* הודעות */}
        {successMsg && (
          <p className="text-center text-green-600 font-medium mt-2">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="text-center text-red-600 font-medium mt-2">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}
