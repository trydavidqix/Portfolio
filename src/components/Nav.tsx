import React, { useState, useEffect, useMemo, memo } from "react";

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

  // Usando useMemo para evitar que o array seja recriado a cada renderização
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

      // Usando o array pré-calculado
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

    // Usando throttle para limitar a frequência de eventos de scroll
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

  const resumeLink = "/David Macêdo - Currículo.pdf";

  // Adicionando classes condicionais baseadas na prop isMobile
  const navContainerClasses = `flex flex-col items-end space-y-8 ${
    isMobile ? "w-full" : ""
  }`;

  return (
    <nav className={className}>
      <div className={navContainerClasses}>
        {navItems.map((item) => (
          <a
            key={item.section}
            href={`#${item.section}`}
            onClick={onItemClick}
            className={`py-2 px-1 text-sm font-mono transition-colors duration-300 ${
              activeSection === item.section
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-light-100)] hover:text-[var(--color-accent)]"
            }`}
          >
            {item.name}
          </a>
        ))}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[var(--color-accent)] text-[var(--color-accent)] rounded px-4 py-2 text-sm font-mono hover:bg-[var(--color-accent-transparent)] transition-colors duration-300"
          onClick={onItemClick}
        >
          Currículo
        </a>
      </div>
    </nav>
  );
};

// Memorizando o componente para evitar rerenderizações desnecessárias
export default memo(Nav);
