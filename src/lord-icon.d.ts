declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src?: string;
      trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "boomerang";
      style?: React.CSSProperties;
      colors?: string;
      delay?: string;
    }, HTMLElement>;
  }
}