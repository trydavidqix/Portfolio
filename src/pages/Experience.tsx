import { useState, useMemo, memo } from "react";

interface ExperienceData {
  company: string;
  url: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiencesData: ExperienceData[] = [
  {
    company: "Terrapixel",
    url: "https://terrapixel.com",
    role: "Desenvolvedor Front-End",
    period: "2022 - Atual",
    description: [
      "Desenvolvimento de landing pages e dashboards com React + Tailwind",
      "Criação de componentes performáticos e sites responsivos com dark mode",
      "Integração com APIs de terceiros (Google Analytics, Meta Ads)",
      "Implementação de interfaces responsivas e acessíveis seguindo práticas modernas",
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Next.js"],
  },
  {
    company: "Smart Fit",
    url: "https://smartfit.com.br",
    role: "Professor de Musculação",
    period: "2018 - 2022",
    description: [
      "Auxílio na adaptação de alunos e desenvolvimento de planos de treino",
      "Trabalho em equipe para criar ambiente motivador e produtivo",
      "Orientação técnica para segurança e eficiência dos exercícios",
    ],
    technologies: ["Treinamento", "Atendimento ao Cliente", "Liderança"],
  },
];

const ExperienceContent = memo(
  ({ experience }: { experience: ExperienceData }) => (
    <div className="flex-grow">
      <div className="min-h-[250px]">
        <h3 className="text-xl text-[var(--color-light-100)] mb-1">
          <span>{experience.role}</span>{" "}
          <span className="text-[var(--color-accent)]">
            @{" "}
            <a
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center"
            >
              {experience.company}
            </a>
          </span>
        </h3>

        <p className="mb-5 font-mono text-xs text-[var(--color-medium-500)]">
          {experience.period}
        </p>

        <ul className="space-y-4 text-[var(--color-medium-600)]">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-[var(--color-accent)] mr-2 mt-1.5 flex-shrink-0">
                ▹
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono text-[var(--color-medium-500)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
);

const Experience = () => {
  const [selected, setSelected] = useState(0);

  const experiences = useMemo(() => experiencesData, []);

  const selectedExperience = useMemo(
    () => experiences[selected],
    [experiences, selected]
  );

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center mb-10">
            <h3 className="text-2xl font-bold text-[var(--color-light-100)]">
              Onde Trabalhei
            </h3>
            <div className="flex-grow ml-4 h-px bg-[var(--border-color)]"></div>
          </div>

          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-max w-full overflow-x-auto mb-6">
                <div className="flex lg:flex-col min-w-full border-b lg:border-b-0 lg:border-l border-[var(--border-color)]">
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setSelected(index)}
                      className={`px-5 py-3 text-sm font-mono transition-all duration-200 whitespace-nowrap focus:outline-none lg:w-full ${
                        selected === index
                          ? "text-[var(--color-accent)] bg-[var(--color-dark-950)] lg:border-l-2 lg:border-l-[var(--color-accent)] lg:-ml-[2px]"
                          : "text-[var(--color-medium-700)] hover:text-[var(--color-accent)] hover:bg-[var(--color-dark-950)]/30"
                      }`}
                      aria-selected={selected === index}
                    >
                      {exp.company}
                    </button>
                  ))}
                </div>
              </div>

              <ExperienceContent experience={selectedExperience} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
