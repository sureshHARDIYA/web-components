import { Deck } from "spectacle";

import Title from "./slides/Title";
import { trygTheme } from "@/theme";
import Agenda from "./slides/Agenda";
import template from "./theme/template";
import AddingProps from "./slides/AddingProps";
import { TrygSlide } from "@/components/TrygSlide";
import FreshComponent from "./slides/FeshComponent";
import GettingStarted from "./slides/GettingStarted";
import ProjectStructure from "./slides/ProjectStructure";

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

      {/* Slide -4 */}
      <ProjectStructure />

      {/* Slide -5 */}
      <FreshComponent />

      {/* Slide -6 Adding Props */}
      <TrygSlide title="Adding Properties">
        <AddingProps />
      </TrygSlide>
    </Deck>
  );
}

export default App;
