import { useTheme } from "../hooks/useTheme";
import { memo, useCallback } from "react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  isVertical?: boolean;
}

const ThemeToggle = ({ isVertical = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isOn = theme === "dark";

  // Use useCallback para prevenir renderizações desnecessárias
  const handleToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  // Use useCallback para prevenir renderizações desnecessárias do handler do teclado
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    },
    [toggleTheme]
  );

  const nextTheme = isOn ? "light" : "dark";
  const ariaLabel = `Alternar para modo ${nextTheme}`;

  return (
    <div
      className={`theme-toggle-container ${isVertical ? "flex flex-col" : ""}`}
    >
      <div
        className={`theme-switch ${isVertical ? "vertical" : ""}`}
        data-is-on={isOn}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
        role="switch"
        aria-checked={isOn}
        tabIndex={0}
      >
        <motion.div
          className="theme-ball"
          layout
          transition={isOn ? spring : bounce}
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">
        {`Tema atual: ${theme}. Clique para alternar para o modo ${nextTheme}.`}
      </span>
    </div>
  );
};

// Configurações de animação otimizadas
const bounce = {
  duration: 1.2,
  ease: bounceEase,
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function bounceEase(x: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

// Memoizar com uma função de comparação personalizada para garantir re-renderizações apenas quando necessário
export default memo(ThemeToggle, (prevProps, nextProps) => {
  return prevProps.isVertical === nextProps.isVertical;
});
