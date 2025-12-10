import { motion } from "framer-motion";

const galleryData = [
  {
    id: 1,
    title: "Cheesy Margherita",
    image: "/Cheesy Margherita.jpg",
  },
  {
    id: 2,
    title: "Veg Loaded Feast",
    image: "/VegLoadedFeast.jpg",
  },
  {
    id: 3,
    title: "Pepperoni Classic",
    image: "/PepperoniClassic.jpg",
  },
  {
    id: 4,
    title: "Garlic Bread Slices",
    image: "/GarlicBreadSlices.jpg",
  },
  
  {
    id: 5,
    title: "Spicy Paneer Pizza",
    image: "/SpicyPaneerPizza.jpg",
  },
  {
    id: 6,
     title: "Dessert Brownie",
    image: "/DessertBrownie.jpg",
    
  },
  {
    id: 7,
   title: "Pizza Center Kitchen",
    image: "/FarmhouseFresh.jpg",
  },
  {
    id: 8,
    title: "Center Seating & Ambience",
    image: "/PizzaCenterSeating.jpg",
  },
];


export default function Gallery() {
  return (
    <section
      id="Gallery"
      className="py-20 bg-gradient-to-b "
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-red-700 mb-2">
          🍕 Our Gallery
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          A delicious peek into our Kitchen, Flavors, and Ambience. Each picture
          tells a story of taste and tradition.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
