import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left Image with Smooth Entrance */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/aboutpizza.jpg"
            alt="About Laziz Pizza"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Right Text with Smooth Entrance */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-red-600">About Us</h2>
          <p className="mb-5 text-lg text-gray-700 leading-relaxed">
            Founded in the heart of Parbhani, Maharashtra, Laziz Pizza brings together a love for authentic Italian recipes and the vibrant taste of local spices. From the moment you walk in, you’re not just a customer—you’re part of the Laziz family.
          </p>
          <p className="mb-5 text-lg text-gray-700 leading-relaxed">
            What sets us apart is our commitment to quality. Every pizza is made fresh with handpicked ingredients, carefully crafted sauces, and a crust that’s crisped to perfection in our traditional oven.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Laziz Pizza was founded by Mr. <strong>[Owner Name]</strong>, a passionate food lover and entrepreneur who dreamed of serving something extraordinary in his hometown. Today, Laziz is not just a place to eat, but a place where memories are made—one slice at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
