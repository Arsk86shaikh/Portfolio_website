import React, { useState } from "react";

// You may need to install Font Awesome React package for icons
// Or use a CDN or SVG for icons if preferred

const navLinks = [
  { href: "#skillsection", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#achievementsection", label: "Achievements" },
  { href: "#opensource", label: "Projects" },
  { href: "/Resume.pdf", label: "Resume", download: true },
  { href: "#ContactMe", label: "Contact Me" },
];

const sidebarLinks = [
  ...navLinks.slice(0, 6),
  { href: "#ContactMe", label: "Contact Me" }
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Close sidebar
  const closeSidebar = () => setSidebarOpen(false);

  // Toggle dark mode
  const toggleMode = () => setDarkMode((prev) => !prev);

  // // Apply dark mode to body and root html
  // React.useEffect(() => {
  //   document.body.classList.toggle("dark", darkMode);
  //   document.documentElement.classList.toggle("dark", darkMode);
  // }, [darkMode]);

  // // Icon rendering
  // const ModeIcon = () =>
  //   darkMode ? (
  //     <svg className="w-6 h-6 text-yellow-400 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M4.222 19.778l-.707-.707" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  //     </svg>
  //   ) : (
  //     <svg className="w-6 h-6 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  //     </svg>
  //   );

  return (
    <header className="w-full shadow-md bg-transparent z-50 fixed top-0 left-0">
      <nav className="flex justify-between items-center px-6 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-b-xl transition-colors duration-300">
        {/* Logo in cursive pattern */}
        <h1
          className="text-2xl font-bold cursor-pointer text-gray-700 dark:text-gray-200 font-[Dancing Script, cursive] transition-colors duration-300"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontWeight: "bold",
            letterSpacing: "1px"
          }}
          onClick={() => (window.location.href = "/")}
        >
          &lt; <span className="text-blue-500">Ar Developer</span> /&gt;
        </h1>

        {/* Desktop nav links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="relative text-gray-800 dark:text-gray-100 hover:text-blue-500 transition-colors duration-200
                  after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-500
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                style={{
                  position: "relative",
                }}
                download={link.download ? true : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mode toggle */}
        {/* <button
          className="ml-4 p-2 rounded-full hover:bg-blue-200 dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={toggleMode}
          aria-label="Toggle Dark Mode"
        >
          <ModeIcon />
        </button> */}

        {/* Hamburger */}
        <button
          className="md:hidden ml-4 p-2"
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
        >
          <svg className="w-7 h-7 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/>
          </svg>
        </button>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
        aria-label="Close Sidebar Overlay"
      />

      {/* Sidebar (Transparent Theme) */}
      <aside
        className={`fixed top-0 right-0 w-72 h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-lg z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="sidebar"
      >
        <div className="flex flex-col h-full p-6">
          <ul className="space-y-5 mb-10">
            {sidebarLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="block text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-200
                    relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-500
                    after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                  style={{
                    position: "relative",
                  }}
                  download={link.download ? true : undefined}
                  onClick={closeSidebar}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-auto">
            <a href="#ContactMe" className="btn btn-primary bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              Contact Me
            </a>
            <a href="#opensource" className="btn btn-secondary bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition">
              View My Projects
            </a>
            <a href="/Resume.pdf" className="btn btn-success bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition" download>
              📄 Download Resume
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}