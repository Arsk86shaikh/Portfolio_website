import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="Home"
            className="min-h-[80vh] flex items-center justify-center bg-[url('/pizza.jpg')] bg-cover bg-center relative"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 text-center text-white p-8 rounded-xl backdrop-blur"
            >
                <h1
                    className="
    text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg
    bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400
    text-transparent bg-clip-text
  "
                >
                    Deliciously Cheesy, Laziz Pizza!
                </h1>
                <p className="mb-8 text-xl md:text-2xl font-medium drop-shadow-lg">
                    Fresh out of the oven. Always hot. Always good.
                </p>
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg rounded-full font-bold shadow-lg transition"
                    onClick={() =>
                        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    Order Now 🍕
                </motion.button>
            </motion.div>
        </section>
    );
}