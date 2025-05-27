import { memo } from "react";
import LordIcon from "./LordIcon";

// Componente para os ícones de redes sociais
const SocialIcon = memo(
  ({
    href,
    iconSrc,
    label,
  }: {
    href: string;
    iconSrc: string;
    label: string;
  }) => (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-[var(--color-medium-700)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-200 flex"
      >
        <LordIcon src={iconSrc} trigger="loop" size={50} />
      </a>
    </li>
  )
);

const SocialSidebar = memo(() => (
  <div className="fixed bottom-0 left-12 z-10 hidden lg:block">
    <div className="flex flex-col items-center">
      <ul className="flex flex-col gap-6 mb-8">
        <SocialIcon
          href="https://github.com/trydavidqix"
          iconSrc="https://cdn.lordicon.com/jjxzcivr.json"
          label="GitHub"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/trydavidqix/"
          iconSrc="https://cdn.lordicon.com/qgebwute.json"
          label="LinkedIn"
        />
        <SocialIcon
          href="mailto:davidqix@live.com"
          iconSrc="https://cdn.lordicon.com/diihvcfp.json"
          label="Email"
        />
      </ul>
      <div className="h-24 w-px bg-[var(--color-medium-700)]"></div>
    </div>
  </div>
));
export default SocialSidebar;