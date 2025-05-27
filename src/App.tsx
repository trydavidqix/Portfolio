import { useEffect, useCallback, memo, useRef } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import { ThemeProvider } from "./context/ThemeContext";
import SocialSidebar from "./components/Sidebar";
import Hero from "./pages/Hero";

const AnimationStyles = memo(() => (
  <style>{`
    @keyframes pathDraw {
      to {
        stroke-dashoffset: 0;
      }
    }
    .animate-path-draw {
      stroke-dasharray: 130;
      stroke-dashoffset: 130;
      animation: pathDraw 1s forwards;
    }
    .animate-fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s var(--transition-function), transform 0.6s var(--transition-function);
    }
    .animate-fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .animate-fade-in-delay-100.visible {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 100ms;
    }
    .animate-fade-in-delay-200.visible {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 200ms;
    }
    .animate-fade-in-delay-300.visible {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 300ms;
    }
    .vertical-text {
      writing-mode: vertical-rl;
    }
  `}</style>
));

const App = () => {
  // Usar useRef para armazenar a referência do observer para limpeza adequada
  const observerRef = useRef<IntersectionObserver | null>(null);

  const animateElements = useCallback(() => {
    // Limpar observer anterior se existir
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Configurar novo observer com opções otimizadas
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adicionar classe 'visible' para iniciar a animação
            entry.target.classList.add("visible");

            // Só remova a observação se a animação não precisa ser repetida
            // Por exemplo, para elementos que só devem animar uma vez quando entram na viewport
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Inicia a animação quando 10% do elemento está visível
        rootMargin: "0px 0px -100px 0px", // Margem negativa no fundo para antecipar a animação
      }
    );

    // Observar todos os elementos com a classe animate-fade-in
    const elements = document.querySelectorAll(".animate-fade-in");
    elements.forEach((element) => {
      observerRef.current?.observe(element);
    });
  }, []);

  useEffect(() => {
    // Iniciar as animações quando o componente for montado
    animateElements();

    // Limpar o observer quando o componente for desmontado
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [animateElements]);

  return (
    <ThemeProvider>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen font-sans transition-colors duration-300">
        <ScrollIndicator />

        <Header />

        <SocialSidebar />

        <main className="px-6 sm:px-12 lg:px-32 xl:px-52 mx-auto max-w-screen-xl">
          <div id="content">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </main>

        <Footer />

        <AnimationStyles />
      </div>
    </ThemeProvider>
  );
};

export default App;
