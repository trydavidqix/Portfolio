import React, { memo, useMemo } from "react";
import LordIcon from "./LordIcon";

const SocialIcons = memo(() => (
  <div className="flex justify-center space-x-6 mb-6">
    <a
      href="https://github.com/trydavidqix"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-[var(--color-medium-700)] hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all duration-200 flex"
    >
      <LordIcon
        src="https://cdn.lordicon.com/jjxzcivr.json"
        trigger="loop"
        colors={{
          primary: "#0a192f",
          secondary: "##6495EE",
        }}
        size={50}
      />
    </a>
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
  </div>
));

const Footer: React.FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="py-6 text-center text-[var(--color-medium-600)]">
      <div className="px-6">
        <div className="lg:hidden">
          <SocialIcons />
        </div>

        <p className="font-mono text-xs mb-5">
          <a
            href="https://github.com/trydavidqix/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-medium-700)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span>Por David William</span>
          </a>
        </p>
        <div className="mt-4 font-mono text-xs opacity-60">
          <p className="mt-1">© {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
