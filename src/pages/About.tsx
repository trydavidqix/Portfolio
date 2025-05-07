import { memo } from "react";
import LordIcon from "../components/LordIcon";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";


import { FaGitAlt } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import { SiVite } from "react-icons/si";

import { useTheme } from "../hooks/useTheme";

const technologies = [
  {
    name: "JavaScript (ES6+)",
    icon: <IoLogoJavascript className="text-[var(--color-accent)] text-xl" />,
    useReactIcon: true,
    iconSrc: undefined,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[var(--color-accent)] text-xl" />,
    useReactIcon: true,
    iconSrc: undefined,
  },
  {
    name: "React",
    icon: <FaReact className="text-[var(--color-accent)] text-xl" />,
    useReactIcon: true,
    iconSrc: undefined,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-[var(--color-accent)] text-xl" />,
    useReactIcon: true,
    iconSrc: undefined,
  },
  {
    name: "Vite",
    icon: <SiVite className="text-[var(--color-accent)] text-xl" />,
    useReactIcon: true,
    iconSrc: undefined,
  },
  {
    name: "Git & GitHub",
    icon: (
      <div className="flex items-center gap-2 text-[var(--color-accent)] text-xl">
        <FaGitAlt />
        <FaGithub />
      </div>
    ),
    useReactIcon: true,
    iconSrc: undefined,
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-[var(--color-accent)] text-xl" />,
    useReactIcon: true,
    iconSrc: undefined,
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion className="text-[var(--color-accent)] text-xl" />,
    useReactIcon: true,
    iconSrc: undefined,
  },
];

const TechItem = memo(
  ({
    name,
    iconSrc,
    icon,
    useReactIcon,
  }: {
    name: string;
    iconSrc?: string;
    icon?: React.ReactNode;
    useReactIcon?: boolean;
  }) => {
    const { theme } = useTheme();

    return (
      <li className="flex items-center">
        {useReactIcon ? (
          <span className="mr-2">{icon}</span>
        ) : (
          <LordIcon src={iconSrc!} trigger="hover" size={20} className="mr-2" />
        )}
        <span>{name}</span>
      </li>
    );
  }
);

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center mb-10">
            <h3 className="text-2xl font-bold text-[var(--color-light-100)] lg:mr-4 mb-4 lg:mb-0">
              Sobre Mim
            </h3>
            <div className="flex-grow h-px bg-[var(--border-color)]"></div>
          </div>

          <div className="text-[var(--color-medium-600)] space-y-4 leading-relaxed overflow-x-hidden">
            <p>
              Olá! Me chamo David e sou apaixonado por criar experiências
              digitais na web. Minha jornada como desenvolvedor começou em 2020,
              quando decidi mudar de carreira e mergulhar de cabeça no mundo da
              programação.
            </p>
            <p>
              Desde então, venho me dedicando intensamente ao front-end,
              buscando construir interfaces acessíveis, responsivas e focadas na
              experiência do usuário. Sempre estou explorando boas práticas,
              novos padrões e tecnologias que realmente fazem diferença.
            </p>
            <p>
              Atualmente, estou aprofundando meus conhecimentos em{" "}
              <strong>React</strong>, <strong>TypeScript</strong>, <strong>TailwindCSS</strong> e ferramentas
              modernas do ecossistema, colocando tudo em prática em projetos que
              me desafiam e me fazem evoluir constantemente.
            </p>
            <p>
              Aqui estão algumas tecnologias com as quais tenho trabalhado
              recentemente:
            </p>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-3 max-w-md font-mono text-xs break-words">
              {technologies.map((tech, index) => (
                <TechItem
                  key={index}
                  name={tech.name}
                  iconSrc={tech.iconSrc}
                  icon={tech.icon}
                  useReactIcon={tech.useReactIcon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
