import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebComponents from "./presentations/web-components";
import DesignEchoSystem from "./presentations/design-echo-system";
import NordicDesignSystem from "./presentations/nordic-design-system";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebComponents />} />
        <Route
          path="/design-system-echosystem"
          element={<DesignEchoSystem />}
        />
        <Route path="/nordic-design-system" element={<NordicDesignSystem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
