import React, { useState } from "react";
import LordIcon from "../components/LordIcon";

const featuredProjects = [
  {
    title: "Gimnofange",
    description:
      "Plataforma web completa para uma academia virtual focada em fitness e saúde. Oferece informações sobre aulas, preços e uma calculadora avançada de calorias e macronutrientes, ajudando o usuário a planejar dieta e treinos conforme seus objetivos. Desenvolvido com React, TypeScript, TailwindCSS e animações modernas, com design responsivo e navegação intuitiva.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/trydavidqix/Gimnofange",
    external: "https://trydavidqix.github.io/Gimnofange/",
    images: [
      "images/Gimnofange/1.png", // Home page com "Transforme seu foco e sua vida"
      "images/Gimnofange/2.png", // Preços/planos - Básico, Premium e Elite
      "images/Gimnofange/3.png", // Calculadora de calorias - formulário de entrada
      "images/Gimnofange/4.png", // Resultado da análise - macronutrientes e calorias
    ],
    fallbackColor: "#112240",
  },
  {
    title: "Artisanal Bakery",
    description:
      "Site moderno e responsivo para uma padaria artesanal que valoriza qualidade e tradição. Apresenta produtos premium, processos exclusivos e a história da marca, com design adaptado para qualquer dispositivo. Desenvolvido em React e TypeScript, com navegação fluida, animações elegantes e foco na experiência do usuário.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/trydavidqix/ArtisanalBakery",
    external: "https://trydavidqix.github.io/ArtisanalBakery/",
    images: [
      "images/ArtisanalBakery/1.png", // Página inicial com história
      "images/ArtisanalBakery/2.png", // Página de produtos
      "images/ArtisanalBakery/3.png", // Seção de depoimentos
      "images/ArtisanalBakery/4.png", // Página de contato
    ],
    fallbackColor: "#f5f3ef",
  },
  {
    title: "TurboGainz",
    description:
      "Loja virtual responsiva e moderna focada em hormônios e produtos hardcore para crescimento muscular. Desenvolvido com React, TypeScript e TailwindCSS, entrega performance, design afiado e experiência de usuário de alto nível. Inclui busca, carrinho com persistência, simulação de login e checkout, e arquitetura preparada pra escalar.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/trydavidqix/TurboGainz",
    external: "https://trydavidqix.github.io/TurboGainz/",
    images: [
      "images/TurboGainz/1.png", // Página inicial com história
      "images/TurboGainz/2.png", // Página de produtos
      "images/TurboGainz/3.png", // Seção de depoimentos
      "images/TurboGainz/4.png", // Página de contato
    ],
    fallbackColor: "#f5f3ef",
  },
];

const Projects = () => {
  // Para controlar qual imagem está sendo mostrada em cada projeto
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(featuredProjects.length).fill(0)
  );
  // Para controlar o autoplay do carrossel
  const [autoplay] = useState(true);

  // Efeito para mudar automaticamente as imagens a cada 3 segundos
  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    if (autoplay) {
      featuredProjects.forEach((_, index) => {
        const timer = setInterval(() => {
          nextImage(index);
        }, 3000);
        timers.push(timer);
      });
    }

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [autoplay]);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    console.error("Erro ao carregar imagem:", target.src);
    const container = target.closest(".image-container") as HTMLElement;
    if (container) {
      const projectIndex = parseInt(target.dataset.projectIndex || "0");
      const fallbackColor =
        featuredProjects[projectIndex]?.fallbackColor || "#112240";
      container.style.backgroundColor = fallbackColor;
      container.innerHTML = `<div class="text-white text-center p-4">Imagem não disponível</div>`;
    }
  };

  // Função para trocar imagem (próxima)
  const nextImage = (projectIndex: number) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] =
        (newIndexes[projectIndex] + 1) %
        featuredProjects[projectIndex].images.length;
      return newIndexes;
    });
  };
  // Função para trocar imagem (anterior) - removida pois não está sendo utilizada

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12">
        <div className="animate-fade-in">
          <div className="flex items-center mb-10">
            <h3 className="text-2xl font-bold text-[var(--color-light-100)]">
              Alguns Projetos
            </h3>
            <div className="flex-grow ml-4 h-px bg-[var(--border-color)]"></div>
          </div>

          <ul className="space-y-24">
            {featuredProjects.map((project, i) => (
              <li
                key={i}
                className="relative grid md:grid-cols-12 items-center gap-y-10 md:gap-y-0"
              >
                <div
                  className={`md:col-span-7 ${
                    i % 2 === 0 ? "md:col-start-6" : "md:col-start-1"
                  } relative z-10`}
                >
                  {/* Apenas a imagem sem container */}
                  <img
                    src={project.images[currentImageIndex[i]]}
                    alt={`${project.title} imagem ${currentImageIndex[i] + 1}`}
                    className="w-auto h-auto object-contain rounded mx-auto block"
                    style={{
                      maxHeight: "500px",
                      maxWidth: "100%",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                    onError={handleImageError}
                    data-project-index={i}
                    loading="lazy"
                  />
                </div>

                <div
                  className={`md:col-span-7 md:col-start-1 md:row-start-1 ${
                    i % 2 === 0
                      ? "md:text-right md:col-start-1"
                      : "md:col-start-6 md:col-end-13"
                  } relative z-20`}
                >
                  <div>
                    <p className="text-[var(--color-accent)] font-mono text-xs mb-1">
                      Projeto em destaque
                    </p>{" "}
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-light-100)] mb-5 break-words">
                      {project.title}
                    </h3>
                    <div className="bg-[var(--color-dark-950)] p-4 sm:p-6 rounded text-[var(--color-medium-500)] shadow-xl mb-5 relative z-20 overflow-hidden break-words">
                      <p className="text-sm sm:text-base">
                        {project.description}
                      </p>
                    </div>
                    <ul
                      className={`flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs font-mono text-[var(--color-medium-500)] ${
                        i % 2 === 0 ? "md:justify-end" : "justify-start"
                      }`}
                    >
                      {project.tech.map((tech, j) => (
                        <li key={j}>{tech}</li>
                      ))}
                    </ul>
                    <div
                      className={`flex text-[var(--color-light-100)] gap-5 ${
                        i % 2 === 0 ? "md:justify-end" : "justify-start"
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] transition-colors"
                        aria-label="GitHub"
                      >
                        <LordIcon
                          src="https://cdn.lordicon.com/jjxzcivr.json"
                          trigger="loop"
                          size={50}
                        />
                      </a>
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] transition-colors"
                        aria-label="Link Externo"
                      >
                        <LordIcon
                          src="https://cdn.lordicon.com/gsjfryhc.json"
                          trigger="loop"
                          size={50}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
