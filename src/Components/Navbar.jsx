import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#skillsection", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
  { href: "#projects", label: "Projects" },
  { href: "/Resume.pdf", label: "Resume", download: true },
  { href: "#contact", label: "Contact Me" },
];

const sidebarLinks = [
  ...navLinks.slice(0, 6),
  { href: "#contact", label: "Contact Me" }
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Close sidebar
  const closeSidebar = () => setSidebarOpen(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  return (
    <header className="w-full z-50 fixed top-0 left-0">
      <nav
        className={`flex justify-between items-center px-6 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg shadow-lg shadow-amber-500/10"
            : "bg-black/40 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer text-white font-['Dancing_Script',_cursive] transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
          onClick={() => (window.location.href = "/")}
        >
          &lt; <span className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">Ar Developer</span> /&gt;
        </h1>

        {/* Desktop nav links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, idx) => (
            <li key={idx} className="group">
              <a
                href={link.href}
                className="relative text-white/90 hover:text-amber-500 transition-all duration-300 font-medium
                  after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 
                  after:bg-gradient-to-r after:from-amber-500 after:to-orange-500
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left
                  hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                download={link.download ? true : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger with animation */}
        <button
          className={`md:hidden ml-4 p-2 relative w-10 h-10 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 ${
            sidebarOpen ? "rotate-90" : ""
          }`}
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              sidebarOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full my-1 transition-all duration-300 ${
              sidebarOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              sidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Sidebar Overlay (no animation) */}
      <div
        className={`fixed inset-0 bg-black z-40 ${
          sidebarOpen ? "bg-opacity-70 visible" : "bg-opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-label="Close Sidebar"
      />

      {/* Sidebar (fixed position, no slide animation) */}
      <aside
        className={`fixed top-0 right-0 w-80 h-full bg-black/90 backdrop-blur-xl shadow-2xl shadow-amber-500/20 z-50 
          border-l border-amber-500/20 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Sidebar header */}
          <div className="mb-8 pb-6 border-b border-amber-500/30">
            <h2 className="text-2xl font-bold text-white mb-1">Menu</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>

          {/* Navigation links (no stagger animation) */}
          <ul className="space-y-2 mb-auto">
            {sidebarLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="block text-white/90 hover:text-amber-500 transition-all duration-300 py-3 px-4 rounded-lg
                    hover:bg-amber-500/10 hover:translate-x-2 group relative overflow-hidden"
                  download={link.download ? true : undefined}
                  onClick={closeSidebar}
                >
                  <span className="relative z-10 font-medium">{link.label}</span>
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500 
                    transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Action buttons (no stagger animation) */}
          <div className="flex flex-col gap-3 pt-6 border-t border-amber-500/30">
            <a
              href="#ContactMe"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-lg 
                transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105"
              onClick={closeSidebar}
            >
              Contact Me
            </a>
            <a
              href="#opensource"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg 
                border border-amber-500/30 transition-all duration-300 hover:border-amber-500 hover:scale-105"
              onClick={closeSidebar}
            >
              View My Projects
            </a>
            <a
              href="/Resume.pdf"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 
                text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 
                hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 flex items-center justify-center gap-2"
              download
              onClick={closeSidebar}
            >
              <span>📄</span> Download Resume
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}