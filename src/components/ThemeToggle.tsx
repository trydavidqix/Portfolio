import { useTheme } from "../hooks/useTheme";
import { memo } from "react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  isVertical?: boolean;
}

const ThemeToggle = ({ isVertical = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isOn = theme === "dark";

  return (
    <div
      className={`theme-toggle-container ${isVertical ? "flex flex-col" : ""}`}
    >
      <div
        className={`theme-switch ${isVertical ? "vertical" : ""}`}
        data-is-on={isOn}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <motion.div
          className="theme-ball"
          layout
          transition={isOn ? spring : bounce}
        />
      </div>
    </div>
  );
};

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

export default memo(ThemeToggle);
