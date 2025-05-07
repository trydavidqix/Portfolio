import React, { useEffect, useRef, memo } from "react";
import { useTheme } from "../hooks/useTheme";

interface LordIconProps {
  src: string;
  trigger?:
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "boomerang";
  colors?: {
    primary?: string;
    secondary?: string;
  };
  size?: number;
  delay?: number;
  className?: string;
}

const LordIcon: React.FC<LordIconProps> = ({
  src,
  trigger = "hover",
  colors,
  size = 32,
  delay = 0,
  className = "",
}) => {
  const iconRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const defaultColors = {
    primary: theme === "dark" ? "#000000" : "#97A4BD",
    secondary: theme === "dark" ? "#121212" : "#97A4BD",
  };

  const finalColors = colors || defaultColors;

  useEffect(() => {
    if (iconRef.current) {
      const themeColors = {
        primary: theme === "dark" ? "#000000" : "#97A4BD",
        secondary: theme === "dark" ? "#121212" : "#97A4BD",
      };

      const iconColors = colors || themeColors;

      const colorString = iconColors.secondary
        ? `primary:${iconColors.primary},secondary:${iconColors.secondary}`
        : `primary:${iconColors.primary}`;

      iconRef.current.setAttribute("colors", colorString);

      if (delay) {
        iconRef.current.setAttribute("delay", delay.toString());
      }
    }
  }, [finalColors.primary, finalColors.secondary, delay, theme, colors]);

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={trigger}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={className}
    ></lord-icon>
  );
};

export default memo(LordIcon);
