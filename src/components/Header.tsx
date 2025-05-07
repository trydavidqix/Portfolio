import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 right-0 z-50 py-6 px-4 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-[var(--bg-primary)]/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-col items-end pt-24">
        <div className="absolute top-6 right-4">
          <ThemeToggle isVertical={isMobile} />
        </div>

        <Nav className="hidden lg:flex" />

        <button
          className="lg:hidden absolute top-6 right-14 text-[var(--color-light-100)] p-2 hover:text-[var(--color-accent)] transition-colors"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          id="mobile-menu"
          className={`lg:hidden fixed top-20 right-0 h-auto bg-[var(--bg-primary)] shadow-lg border-l border-[var(--border-color)] py-4 px-5 rounded-bl-lg transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            zIndex: 40,
            pointerEvents: isMenuOpen ? "auto" : "none",
            position: "fixed",
            visibility: isMenuOpen ? "visible" : "hidden",
            width: "auto",
            maxWidth: "180px",
          }}
        >
          <div className="flex flex-col relative">
            <button
              className="absolute text-[var(--color-light-100)] hover:text-[var(--color-accent)] transition-colors"
              onClick={closeMenu}
              aria-label="Fechar menu"
              style={{
                right: "100px",
                top: "-10px",
                padding: "4px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Nav isMobile={true} onItemClick={closeMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
