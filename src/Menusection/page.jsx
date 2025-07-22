import { useState } from "react";
import { motion } from "framer-motion";

import CategorySidebar from "./CategorySidebar";


// Category list
const categories = [
  "All",
  "Pizza",
  "Burgers and Sandwiches",
  "Snacks",
  "Momos",
  "Starters",
  "Chicken Starters",
  "Desserts",
  "Drinks (Beverages)"
];

const products = [
  // PIZZA
  { id: 1, name: "Simple Veg Pizza", category: "Pizza", price: 169, img: "/simple-veg-pizza.jpg", desc: "3 Types of cheese." },
  { id: 2, name: "Double Cheese Pizza", category: "Pizza", price: 169, img: "/double-cheese-pizza.jpg", desc: "3 Types of cheese." },
  { id: 3, name: "Corn n Cheese Pizza", category: "Pizza", price: 185, img: "/corn-n-cheese-pizza.jpg", desc: "Corn, tomato, green capsicum, jalapeno and mushroom." },
  { id: 4, name: "Veg Super Pizza", category: "Pizza", price: 185, img: "/veg-super-pizza.jpg", desc: "3 Types capsicum, red paprika and magic dip." },
  { id: 5, name: "Schezwan Pizza", category: "Pizza", price: 185, img: "/schezwan-pizza.jpg", desc: "Spicy schezwan flavour." },
  { id: 6, name: "Laziz Khas Pizza", category: "Pizza", price: 185, img: "/laziz-khas-pizza.jpg", desc: "3 Types capsicum, sweet corn, black olives and special mix." },
  { id: 7, name: "Laziz Chef.Special Pizza", category: "Pizza", price: 195, img: "/laziz-chef-special-pizza.jpg", desc: "Capsicum, baby corn, red paprika and paneer." },
  { id: 8, name: "Veg Paprika Pizza", category: "Pizza", price: 195, img: "/veg-paprika-pizza.jpg", desc: "Capsicum, onion, red paprika and paneer." },
  { id: 9, name: "Tandoori Paneer Pizza", category: "Pizza", price: 195, img: "/tandoori-paneer-pizza.jpg", desc: "Capsicum, onion and paneer." },
  { id: 10, name: "Margherita Pizza", category: "Pizza", price: 185, img: "/margherita.jpg", desc: "Green capsicum and hot chicken cubes." },
  { id: 11, name: "Laziz Chicken Desi Pizza", category: "Pizza", price: 195, img: "/laziz-chicken-desi-pizza.jpg", desc: "Tomato, capsicum, onion and desi chicken cubes." },
  { id: 12, name: "Peri Peri Chicken Pizza", category: "Pizza", price: 195, img: "/peri-peri-chicken-pizza.jpg", desc: "Onion, capsicum, red paprika, chicken cubes and jalapeno." },
  { id: 13, name: "Tandoori Chicken Pizza", category: "Pizza", price: 195, img: "/tandoori-chicken-pizza.jpg", desc: "" },

  // BURGERS AND SANDWICHES
  { id: 101, name: "Simple Veg Burger", category: "Burgers and Sandwiches", price: 99, img: "/simple-veg-burger.jpg", desc: "" },
  { id: 102, name: "Veg Patty Burger", category: "Burgers and Sandwiches", price: 109, img: "/veg-patty-burger.jpg", desc: "" },
  { id: 103, name: "Fusion Veg Burger", category: "Burgers and Sandwiches", price: 109, img: "/fusion-veg-burger.jpg", desc: "" },
  { id: 104, name: "Peri Peri Paneer Burger", category: "Burgers and Sandwiches", price: 109, img: "/peri-peri-paneer-burger.jpg", desc: "" },
  { id: 105, name: "Fusion Paneer Burger", category: "Burgers and Sandwiches", price: 109, img: "/fusion-paneer-burger.jpg", desc: "" },
  { id: 106, name: "Fusion Paneer Burger with Cheese", category: "Burgers and Sandwiches", price: 110, img: "/fusion-paneer-burger-cheese.jpg", desc: "" },
  { id: 107, name: "Fiery Paneer Burger with Cheese", category: "Burgers and Sandwiches", price: 110, img: "/fiery-paneer-burger-cheese.jpg", desc: "" },
  { id: 108, name: "Mexican Chicken Burger", category: "Burgers and Sandwiches", price: 145, img: "/mexican-chicken-burger.jpg", desc: "Barbeque chicken burger" },
  { id: 109, name: "Simple Chicken Burger with Cheese", category: "Burgers and Sandwiches", price: 130, img: "/simple-chicken-burger-cheese.jpg", desc: "" },
  { id: 110, name: "Peri Peri Chicken Burger with Cheese", category: "Burgers and Sandwiches", price: 130, img: "/peri-peri-chicken-burger-cheese.jpg", desc: "" },
  { id: 111, name: "Barbeque Chicken Burger with Cheese", category: "Burgers and Sandwiches", price: 130, img: "/barbeque-chicken-burger-cheese.jpg", desc: "" },
  { id: 112, name: "Spicy Veg Grilled Sandwich", category: "Burgers and Sandwiches", price: 125, img: "/spicy-veg-grilled-sandwich.jpg", desc: "" },
  { id: 113, name: "Cheesy Toast Grilled Sandwich", category: "Burgers and Sandwiches", price: 125, img: "/cheesy-toast-grilled-sandwich.jpg", desc: "" },
  { id: 114, name: "Chocolate Grilled Sandwich", category: "Burgers and Sandwiches", price: 125, img: "/chocolate-grilled-sandwich.jpg", desc: "" },
  { id: 115, name: "Barbeque Chicken Grilled Sandwich", category: "Burgers and Sandwiches", price: 135, img: "/barbeque-chicken-grilled-sandwich.jpg", desc: "" },
  { id: 116, name: "Peri Peri Chicken Grilled Sandwich", category: "Burgers and Sandwiches", price: 135, img: "/peri-peri-chicken-grilled-sandwich.jpg", desc: "" },

  // SNACKS
  { id: 201, name: "French Fries", category: "Snacks", price: 109, img: "/fries.jpg", desc: "" },
  { id: 202, name: "Peri Peri French Fries", category: "Snacks", price: 125, img: "/peri-peri-french-fries.jpg", desc: "" },
  { id: 203, name: "Peri Peri Garlic Stick", category: "Snacks", price: 205, img: "/peri-peri-garlic-stick.jpg", desc: "" },
  { id: 204, name: "Cheesy Stuffed Garlic Bread", category: "Snacks", price: 205, img: "/cheesy-stuffed-garlic-bread.jpg", desc: "" },

  // MOMOS
  { id: 301, name: "Vegetable Steamed Momos", category: "Momos", price: 99, img: "/veg-momos.jpg", desc: "" },
  { id: 302, name: "Chicken Steamed Momos", category: "Momos", price: 129, img: "/chicken-momos.jpg", desc: "Steamed momos with chicken filling." },

  // DESSERTS
  { id: 401, name: "Brownie", category: "Desserts", price: 159, img: "/brownie.jpg", desc: "" },
  { id: 402, name: "Chocolate Lava Cake", category: "Desserts", price: 169, img: "/lava-cake.jpg", desc: "Warm chocolate cake with molten center." },

  // DRINKS
  { id: 403, name: "Cold Coffee with Vanilla Ice Cream", category: "Drinks (Beverages)", price: 135, img: "/cold-coffee-vanilla.jpg", desc: "" },
  { id: 404, name: "Mint Mojito", category: "Drinks (Beverages)", price: 99, img: "/mint-mojito.jpg", desc: "Refreshing lemon and mint drink." },

  // STARTERS
  { id: 501, name: "Cheesy Nachos", category: "Starters", price: 149, img: "/cheesy-nachos.jpg", desc: "Crispy nachos topped with melted cheese and seasoning." },
  { id: 502, name: "Garlic Bread Classic", category: "Starters", price: 129, img: "/garlic-bread-classic.jpg", desc: "Toasted garlic bread with herbs." },

  // CHICKEN STARTERS
  { id: 601, name: "Chicken Lollipop", category: "Chicken Starters", price: 175, img: "/chicken-lollipop.jpg", desc: "Spicy and crispy chicken wings." },
  { id: 602, name: "Peri Peri Chicken Wings", category: "Chicken Starters", price: 185, img: "/peri-peri-chicken-wings.jpg", desc: "Wings tossed in Peri Peri sauce." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


// Main Component
export default function MenuPage() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? products : products.filter((p) => p.category === selected);

  return (
    <section className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        <CategorySidebar
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        />

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="flex h-48 bg-white rounded-xl shadow border hover:shadow-lg transition border-[#ffd64f] overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-40 h-40 object-cover"
              />
              <div className="flex-1 p-4 text-left space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <div className="text-green-700 font-medium">₹{product.price}</div>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-3 px-5 py-2 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.main>
      </div>
    </section>
  );
}