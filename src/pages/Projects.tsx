import React from "react";
import LordIcon from "../components/LordIcon";

const featuredProjects = [
  {
    title: "Clone do Orkut",
    description:
      "Uma recriação moderna do clássico Orkut com funcionalidades atuais. Inclui autenticação de usuários, perfis personalizáveis, comunidades e modo escuro. Interface responsiva que funciona em todos os dispositivos.",
    tech: ["React", "TypeScript", "TailwindCSS", "Firebase", "NextAuth"],
    github: "https://github.com/trydavidqix/orkut-clone",
    external: "https://orkut-clone.vercel.app",
    image: "/images/projeto-orkut.jpg",
    fallbackColor: "#112240",
  },
  {
    title: "Gerador de Currículos com IA",
    description:
      "Aplicação que utiliza inteligência artificial para criar currículos personalizados baseados no perfil do usuário e na vaga desejada. Otimiza automaticamente palavras-chave e formata o currículo para maior sucesso nas candidaturas.",
    tech: ["Next.js", "OpenAI API", "TailwindCSS", "React Hook Form", "Prisma"],
    github: "https://github.com/trydavidqix/ai-curriculo",
    external: "https://curriculoai.vercel.app",
    image: "/images/projeto-curriculo.jpg",
    fallbackColor: "#112240",
  },
];

const Projects = () => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    const parent = target.parentElement;
    if (parent) {
      const projectIndex = parseInt(target.dataset.index || "0");
      const fallbackColor =
        featuredProjects[projectIndex]?.fallbackColor || "#112240";
      parent.style.backgroundColor = fallbackColor;
      target.style.display = "none";
    }
  };

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
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full group"
                  >
                    <div className="relative rounded overflow-hidden transition-all bg-[var(--color-accent)] hover:bg-transparent min-h-[200px]">
                      <div className="absolute inset-0 bg-[var(--bg-primary)] opacity-80 group-hover:opacity-50 transition-opacity z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover transition-all z-0"
                        onError={handleImageError}
                        data-index={i}
                        loading="lazy"
                      />
                    </div>
                  </a>
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
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-light-100)] mb-5 break-words">
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] transition-colors"
                      >
                        {project.title}
                      </a>
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
                          colors={{
                            primary: "#0a192f",
                            secondary: "#ccd6f6",
                          }}
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
                          colors={{
                            primary: "#0a192f",
                            secondary: "#ccd6f6",
                          }}
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
