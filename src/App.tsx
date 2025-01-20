import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebComponents from "./presentations/web-components";
import DesignEchoSystem from "./presentations/design-echo-system";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebComponents />} />
        <Route
          path="/design-system-echosystem"
          element={<DesignEchoSystem />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
