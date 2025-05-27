import React, { memo } from "react";
import LordIcon from "../components/LordIcon";

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
  <div className="fixed bottom-0 right-12 z-10 hidden lg:block xl:right-16 2xl:right-20">
    <div className="flex flex-col items-center">
      <a
        href="mailto:davidqix@live.com"
        className="vertical-text text-[var(--color-medium-700)] hover:text-[var(--color-accent)] tracking-widest text-xs font-mono mb-8 hover:-translate-y-1 transition-all duration-200"
        style={{ writingMode: "vertical-rl" }}
      >
        davidqix@live.com
      </a>
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
      <p>Eu sou o dev que cai, sangra, levanta… e compila de novo.</p>
      <p>
        Sou front-end como o Peter Parker é o Homem-Aranha: responsivo, rápido e
        com responsabilidade no código.
      </p>
      <p>
        Carrego o peso de cada erro como o Joel carrega a Ellie — sempre com
        propósito.
      </p>
      <p>
        Como Naruto, vim de baixo, desacreditaram... mas tô aqui, virando
        referência. Código pra mim é batalha, e cada deploy é uma arena.{" "}
      </p>
      <p>Se o bug aparece, viro Batman no modo detetive.</p>
      <p>
        No fim, eu construo mais que interfaces — eu crio experiências que
        tocam, transformam e resistem ao tempo. Porque nessa guerra digital, ser
        bom não basta. Tem que ser invencível.
      </p>
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

export default Hero;
export { SocialSidebar, EmailSidebar };
