import React, { useState, useEffect, useMemo, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = useMemo(
    () => [
      { name: "Sobre", section: "about" },
      { name: "Experiência", section: "experience" },
      { name: "Projetos", section: "projects" },
      { name: "Contato", section: "contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Nav scroll handling for active section
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const element = document.getElementById(item.section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navItems]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Para links internos (âncoras)
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Para links externos
      window.open(href, "_blank", "noopener,noreferrer");
    }
    closeMenu();
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNavClick(href);
      }
    },
    [closeMenu]
  );

  const resumeLink = "/Portfolio/David-Macedo-Curriculo.pdf";

  // Navigation component integrated directly
  const renderNav = useCallback(
    (className = "", isMobileNav = false) => {
      const navContainerClasses = `flex flex-col ${
        isMobileNav ? "w-full items-center space-y-6" : "items-end space-y-8"
      }`;

      return (
        <nav className={className} aria-label="Navegação principal">
          <div
            className={navContainerClasses}
            role="menubar"
            aria-orientation="vertical"
          >
            {navItems.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(`#${item.section}`);
                }}
                onKeyDown={(e) => handleKeyDown(e, `#${item.section}`)}
                className={`py-3 px-4 text-base font-mono transition-all duration-300 outline-offset-4 focus:outline-[var(--color-accent)] focus:bg-[var(--color-accent-transparent)] rounded-md ${
                  isMobileNav ? "w-full text-center" : ""
                } ${
                  activeSection === item.section
                    ? "text-[var(--color-accent)] bg-[var(--color-accent-transparent)]"
                    : "text-[var(--color-light-100)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-transparent)]"
                }`}
                aria-current={
                  activeSection === item.section ? "page" : undefined
                }
                role="menuitem"
                tabIndex={0}
              >
                {item.name}
              </a>
            ))}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`border border-[var(--color-accent)] text-[var(--color-accent)] rounded-md px-6 py-3 text-base font-mono hover:bg-[var(--color-accent-transparent)] transition-all duration-300 focus:outline-[var(--color-accent)] focus:bg-[var(--color-accent-transparent)] outline-offset-2 ${
                isMobileNav ? "w-full text-center" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(resumeLink);
              }}
              onKeyDown={(e) => handleKeyDown(e, resumeLink)}
              aria-label="Abrir currículo em PDF (abre em uma nova aba)"
              role="menuitem"
              tabIndex={0}
            >
              Currículo
            </a>
          </div>
        </nav>
      );
    },
    [activeSection, handleNavClick, handleKeyDown, navItems, resumeLink]
  );

  return (
    <>
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

          {renderNav("hidden lg:flex")}

          <button
            className="lg:hidden absolute top-6 right-14 text-[var(--color-light-100)] p-2 hover:text-[var(--color-accent)] transition-colors z-60"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-[var(--bg-primary)] z-50 pt-24 px-6 transform transition-all duration-500 ease-out ${
          isMenuOpen 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0"
        }`}
        style={{
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col h-full">
          <button
            className="absolute top-6 right-6 text-[var(--color-light-100)] hover:text-[var(--color-accent)] transition-colors p-2 z-60"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          
          <div className="flex items-start justify-center pt-16">
            {renderNav("w-full", true)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;