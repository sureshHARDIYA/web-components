/// <reference types="vite/client" />
declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/dist/esm/styles/prism";
declare module "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: `p-${string}`]: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      [key: string]: any; // Accepts any additional properties
    };
  }
}
