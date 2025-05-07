import { useEffect, useCallback, memo } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import { ThemeProvider } from "./context/ThemeContext";
import LordIcon from "./components/LordIcon";

const SocialSidebar = memo(() => (
  <div className="fixed bottom-0 left-12 z-10 hidden lg:block">
    <div className="flex flex-col items-center">
      <ul className="flex flex-col gap-6 mb-8">
        <li>
          <a
            href="https://github.com/trydavidqix"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-medium-700)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-200 flex group"
          >
            <LordIcon
              src="https://cdn.lordicon.com/jjxzcivr.json"
              trigger="loop"
              colors={{
                primary: "#0a192f",
                secondary: "#ccd6f6",
              }}
              size={50}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/trydavidqix/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-medium-700)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-200 flex"
          >
            <LordIcon
              src="https://cdn.lordicon.com/qgebwute.json"
              trigger="loop"
              colors={{
                primary: "#0a192f",
                secondary: "#ccd6f6",
              }}
              size={50}
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:davidqix@live.com"
            aria-label="Email"
            className="text-[var(--color-medium-700)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-200 flex"
          >
            <LordIcon
              src="https://cdn.lordicon.com/diihvcfp.json"
              trigger="loop"
              colors={{
                primary: "#0a192f",
                secondary: "#ccd6f6",
              }}
              size={50}
            />
          </a>
        </li>
      </ul>
      <div className="h-24 w-px bg-[var(--color-medium-700)]"></div>
    </div>
  </div>
));

const EmailSidebar = memo(() => (
  <div className="fixed bottom-0 right-12 z-10 hidden lg:block">
    <div className="flex flex-col items-center">
      <a
        href="mailto:davidqix@live.com"
        className="vertical-text text-[var(--color-medium-700)] hover:text-[var(--color-accent)] tracking-widest text-xs font-mono mb-8 hover:-translate-y-1 transition-all duration-200"
        style={{ writingMode: "vertical-rl" }}
      >
        davidqix@live.com
      </a>
      <div className="h-24 w-px bg-[var(--color-medium-700)]"></div>
    </div>
  </div>
));

const Hero = memo(() => (
  <section className="h-screen flex flex-col justify-center hero-section animate-fade-in">
    <h1 className="text-5xl sm:text-7xl font-bold mb-4">
      <a
        href="#about"
        className="font-mono text-[var(--color-accent)] text-xl tracking-wider"
      >
        &lt; D.a.v.i.d/ &gt;
      </a>
    </h1>
    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--color-medium-600)] mb-6 leading-tight">
      Eu construo
      <br className="sm:hidden" /> experiências
      <br className="sm:hidden" /> para a web.
    </h2>
    <p className="text-[var(--color-medium-500)] max-w-lg mb-12 text-lg">
      Sou um desenvolvedor front-end especializado na criação de experiências
      digitais excepcionais. Atualmente, estou focado em construir produtos
      acessíveis e centrados no usuário.
    </p>
    <div>
      <a
        href="#projects"
        className="inline-block py-4 px-7 border border-[var(--color-accent)] text-[var(--color-accent)] font-mono rounded hover:bg-[var(--color-accent-transparent)] transition-colors duration-300"
      >
        Veja meus projetos
      </a>
    </div>
  </section>
));

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
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    .animate-fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .vertical-text {
      writing-mode: vertical-rl;
    }
    .delay-300 {
      animation-delay: 300ms;
    }
  `}</style>
));

const App = () => {
  const animateElements = useCallback(() => {
    const elements = document.querySelectorAll(".animate-fade-in");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, 100 * index);
    });
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      animateElements();
    }, 100);

    return () => clearTimeout(animationTimer);
  }, [animateElements]);

  return (
    <ThemeProvider>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen font-sans transition-colors duration-300">
        <ScrollIndicator />

        <Header />

        <SocialSidebar />
        <EmailSidebar />

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
