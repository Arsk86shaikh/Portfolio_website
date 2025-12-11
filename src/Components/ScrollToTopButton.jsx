import React, { useEffect, useState } from "react";

/**
 * ScrollToTopButton
 * - Appears after user scrolls down
 * - Smoothly scrolls to top on click
 * - Accessible: keyboard focusable, aria-label
 *
 * Usage:
 * import ScrollToTopButton from './ScrollToTopButton';
 * <ScrollToTopButton />
 */
export default function ScrollToTopButton({
  showAfter = 300, // show button after px scrolled
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={
        `fixed right-4 bottom-6 z-50 flex items-center justify-center rounded-full
         w-12 h-12 shadow-lg transition-transform transform
         bg-amber-500 hover:bg-amber-600 text-black focus:outline-none focus:ring-2 focus:ring-amber-300
         ${visible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}
         ${className}`
      }
      title="Back to top"
    >
      {/* simple arrow icon */}
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}