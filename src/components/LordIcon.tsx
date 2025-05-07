import React, { useEffect, useRef, memo } from "react";

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
  colors = { primary: "#121331", secondary: "#0a0e27" },
  size = 32,
  delay = 0,
  className = "",
}) => {
  const iconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      // Criando um string de cores para evitar múltiplas definições de atributo
      const colorString = colors.secondary
        ? `primary:${colors.primary},secondary:${colors.secondary}`
        : `primary:${colors.primary}`;

      // Definindo os atributos de uma só vez
      iconRef.current.setAttribute("colors", colorString);

      if (delay) {
        iconRef.current.setAttribute("delay", delay.toString());
      }
    }
  }, [colors.primary, colors.secondary, delay]); // Dependências específicas

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

// Memorizando o componente para evitar rerenderizações desnecessárias
export default memo(LordIcon);
