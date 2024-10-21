import { Deck } from "spectacle";

import Title from "./slides/Title";
import { trygTheme } from "@/theme";
import Agenda from "./slides/Agenda";
import template from "./theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import GettingStarted from "./slides/GettingStarted";

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    secondary: trygTheme.black,
  },
};

function App() {
  return (
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <Title />
      </TrygSlide>

      {/* Agenda Slide 2 */}
      <TrygSlide title="Today's Menu">
        <Agenda />
      </TrygSlide>

      {/* Slide -3 */}
      <TrygSlide
        title="Getting Started with Trygno-ui"
        readMoreLink="https://stenciljs.com/docs/introduction"
      >
        <GettingStarted />
      </TrygSlide>
    </Deck>
  );
}

export default App;
