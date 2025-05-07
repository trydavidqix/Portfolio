import { memo } from "react";
import LordIcon from "../components/LordIcon";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

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
  }) => (
    <li className="flex items-center">
      {useReactIcon ? (
        <span className="mr-2">{icon}</span>
      ) : (
        <LordIcon
          src={iconSrc!}
          trigger="hover"
          colors={{
            primary: "var(--color-accent)",
            secondary: "var(--color-accent)",
          }}
          size={20}
          className="mr-2"
        />
      )}
      <span>{name}</span>
    </li>
  )
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
            <p className="break-words">
              Olá! Me chamo David e adoro criar coisas para a web. Meu interesse
              por desenvolvimento web começou em 2020 quando decidi fazer uma
              transição de carreira e mergulhar no mundo da programação.
            </p>
            <p className="break-words">
              Desde então, tenho me dedicado a aprender e aprimorar minhas
              habilidades como desenvolvedor front-end. Tenho focado em
              construir produtos digitais acessíveis e centrados no usuário,
              sempre buscando as melhores práticas e tecnologias mais modernas.
            </p>
            <p className="break-words">
              Atualmente, estou expandindo meus conhecimentos em React,
              TypeScript e outras tecnologias modernas, enquanto trabalho em
              projetos pessoais para aplicar esses conhecimentos na prática.
            </p>

            <p className="break-words">
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
