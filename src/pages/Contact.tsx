import { memo } from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <p className="text-xs sm:text-sm font-mono tracking-wider text-[var(--color-accent)] mb-2 sm:mb-3">
          E Agora?
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--color-light-100)] mb-6 break-words overflow-hidden px-2">
          Entre em Contato
        </h2>

        <p className="text-sm sm:text-base text-[var(--color-medium-600)] max-w-2xl mx-auto mb-10 sm:mb-12 px-2">
          Estou sempre em busca de novas oportunidades! Minha caixa de entrada
          está sempre aberta, seja para uma oportunidade de trabalho, uma
          pergunta ou apenas para dizer olá. Farei o possível para responder!
        </p>

        <a
          href="mailto:davidqix@live.com"
          className="inline-block py-3 px-6 sm:py-4 sm:px-8 border border-[var(--color-accent)] text-[var(--color-accent)] font-mono text-sm sm:text-base rounded hover:bg-[var(--color-accent-transparent)] transition-colors duration-300"
        >
          Diga Olá
        </a>
      </div>
    </section>
  );
};

export default memo(Contact);
