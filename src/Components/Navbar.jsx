import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div href="/" className="font-bold text-2xl text-red-600 cursor-pointer">
          Laziz Pizza 🍕
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          {["Home", "Menu", "Gallery", "About", "Contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="hover:text-red-600 transition"
            >
              {s}
            </button>
          ))}
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          {["Home", "Menu", "Gallery", "About", "Contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="block w-full text-left py-2 px-2 rounded hover:bg-red-100"
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
