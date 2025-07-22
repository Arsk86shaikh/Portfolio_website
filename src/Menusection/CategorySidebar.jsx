import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CategorySidebar({ categories, selected, setSelected }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <aside className="w-full md:w-1/4 bg-white shadow rounded-xl p-4">
      {/* Header with toggle icon */}
      <div className="flex items-center justify-between md:block">
        <h2 className="text-xl font-semibold text-red-600 mb-2 md:mb-4">Categories</h2>

        {/* Toggle button only for mobile */}
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {showDropdown ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
        </button>
      </div>

      {/* Category list */}
      <ul className={`mt-2 space-y-2 ${showDropdown ? "block" : "hidden"} md:block`}>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => {
                setSelected(cat);
                setShowDropdown(false); // Auto close dropdown on mobile
              }}
              className={`block w-full text-left px-4 py-2 rounded transition font-medium ${
                selected === cat
                  ? "bg-red-600 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
