import { motion } from "framer-motion";

const pizzas = [
  {
    name: "Margherita",
    desc: "Classic delight with mozzarella & basil",
    price: 199,
    img: "margherita.jpg",
  },
  {
    name: "Pepperoni",
    desc: "All-time favorite with spicy pepperoni",
    price: 299,
    img: "pepperoni.jpg",
  },
  {
    name: "Veggie Supreme",
    desc: "Loaded with fresh veggies and cheese",
    price: 249,
    img: "veggie.jpg",
  },
  {
    name: "Spicy Paneer",
    desc: "Spicy Indian paneer with a fusion twist",
    price: 279,
    img: "paneer.jpg",
  },
  {
    name: "Farmhouse Special",
    desc: "Tomatoes, onions, capsicum & mushrooms",
    price: 259,
    img: "farmhouse.jpg",
  },
  {
    name: "Cheese Burst",
    desc: "Overflowing cheese delight for cheese lovers",
    price: 319,
    img: "cheeseburst.jpg",
  },
];

// Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Menu() {
  return (
    <section id="Menu" className="py-20 min-h-screen">
      <h2 className="text-5xl font-bold text-red-700 mb-12 text-center">
        🍕 Our Menu
      </h2>

      {/* Smooth staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
      >
        {pizzas.map((pizza) => (
          <motion.div
            key={pizza.name}
            variants={cardVariants}
            className="flex flex-row w-full bg-white rounded-xl shadow border border-[#ffd64f] hover:shadow-lg transition overflow-hidden min-h-[9.5rem]" // min-h-[152px] ≈ 38*4
          >
            <img
              src={pizza.img}
              alt={pizza.name}
              className="w-36 h-40 object-cover flex-shrink-0"
            />
            <div className="flex-1 p-4 text-left flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {pizza.name}
                </h3>
                <div className="text-green-700 font-medium">
                  ₹{pizza.price.toLocaleString("en-IN")}
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{pizza.desc}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 px-5 py-2 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition w-fit"
              >
                Order
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* More Items Button */}
      <div className="flex justify-center mt-10">
        <motion.a
          href="/menusection"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 transition"
        >
          More Items →
        </motion.a>
      </div>
    </section>
  );
}
