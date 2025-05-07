import React, { useState, useEffect, useMemo, memo, useCallback } from "react";

interface NavProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const Nav: React.FC<NavProps> = ({
  className = "",
  isMobile = false,
  onItemClick,
}) => {
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
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = href;
        onItemClick?.();
      }
    },
    [onItemClick]
  );

  const handleItemClick = useCallback(() => {
    if (onItemClick) {
      onItemClick();
    }
  }, [onItemClick]);

  const resumeLink = "/David Macêdo - Currículo.pdf";

  const navContainerClasses = `flex flex-col items-end space-y-8 ${
    isMobile ? "w-full" : ""
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
            onClick={handleItemClick}
            onKeyDown={(e) => handleKeyDown(e, `#${item.section}`)}
            className={`py-2 px-1 text-sm font-mono transition-colors duration-300 outline-offset-4 focus:outline-[var(--color-accent)] focus:bg-[var(--color-accent-transparent)] ${
              activeSection === item.section
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-light-100)] hover:text-[var(--color-accent)]"
            }`}
            aria-current={activeSection === item.section ? "page" : undefined}
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
          onClick={handleItemClick}
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
};

export default memo(Nav);
