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
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = href;
        closeMenu();
      }
    },
    [closeMenu]
  );

  const resumeLink = "/David Macêdo - Currículo.pdf";

  // Navigation component integrated directly
  const renderNav = useCallback(
    (className = "", isMobileNav = false) => {
      const navContainerClasses = `flex flex-col items-end space-y-8 ${
        isMobileNav ? "w-full" : ""
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
                onClick={closeMenu}
                onKeyDown={(e) => handleKeyDown(e, `#${item.section}`)}
                className={`py-2 px-1 text-sm font-mono transition-colors duration-300 outline-offset-4 focus:outline-[var(--color-accent)] focus:bg-[var(--color-accent-transparent)] ${
                  activeSection === item.section
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-light-100)] hover:text-[var(--color-accent)]"
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
              className="border border-[var(--color-accent)] text-[var(--color-accent)] rounded px-4 py-2 text-sm font-mono hover:bg-[var(--color-accent-transparent)] transition-colors duration-300 focus:outline-[var(--color-accent)] focus:bg-[var(--color-accent-transparent)] outline-offset-2"
              onClick={(e) => {
                e.preventDefault();
                window.open(resumeLink, "_blank", "noopener,noreferrer");
                closeMenu();
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
    [activeSection, closeMenu, handleKeyDown, navItems, resumeLink]
  );

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

        {renderNav("hidden lg:flex")}

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
            {renderNav("", true)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
