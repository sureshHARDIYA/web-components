// Clone and modify the tomorrow theme
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

export const customTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "14px",
    overflow: "auto",
    lineHeight: "0.9",
  },
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontSize: "14px",
    overflow: "auto",
    lineHeight: "0.9",
  },
};
