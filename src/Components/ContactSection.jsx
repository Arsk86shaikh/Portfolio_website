import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="Contact" className="py-20">
      <motion.div
        className="max-w-xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          Contact Us
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            placeholder="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-300 transition"
            placeholder="Your Message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
          >
            Send Message
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.span
                className="text-green-600 font-medium text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for contacting us!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </section>
  );
}
