import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PorscheDesignSystemProvider>
      <App />
    </PorscheDesignSystemProvider>
  </StrictMode>
);
