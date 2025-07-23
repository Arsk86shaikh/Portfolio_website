import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-red-700 via-black to-red-700 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-red-300 mb-2">🍕 Laziz Pizza</h2>
            <p className="text-sm">&copy; {new Date().getFullYear()} Laziz Pizza. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="md:flex gap-8 font-medium">
            {/* Quick Links */}
            <ul className="md:flex gap-8 font-medium list-none">
              {["Home", "Menu", "Gallery", "Contact"].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="hover:text-yellow-300 hover:pl-2 transition-all duration-300 block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-4 md:mt-0">
            <a href="#" aria-label="Instagram" className="hover:text-red-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-white/20 pt-4 text-center text-sm text-white/70">
          <p>
            Designed & Developed by <span className="text-red-200 font-medium">
              <a href="https://www.webtrio.in/" className="hover:text-yellow-300 underline transition-colors">
              WebTrio
              </a>
              </span>
          </p>
          <p className="mt-1">
            <a href="/terms" className="hover:text-yellow-300 underline transition-colors">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
