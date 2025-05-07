import { motion, useScroll, useSpring } from "framer-motion";
import { memo } from "react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  // Otimizando as configurações do spring para melhor performance
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
    restSpeed: 0.5,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        backgroundColor: "var(--color-accent)",
        zIndex: 100,
        transformOrigin: "0%",
      }}
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    />
  );
};

// Memorizando o componente para evitar rerenderizações desnecessárias
export default memo(ScrollIndicator);
