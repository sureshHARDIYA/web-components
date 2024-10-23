import { Deck } from "spectacle";

import Title from "./slides/Title";
import { trygTheme } from "@/theme";
import Agenda from "./slides/Agenda";
import template from "./theme/template";
import StateSlide from "./slides/7/States";
import AddingProps from "./slides/AddingProps";
import { TrygSlide } from "@/components/TrygSlide";
import FreshComponent from "./slides/FeshComponent";
import GettingStarted from "./slides/GettingStarted";
import ProjectStructure from "./slides/ProjectStructure";
import LifeCycle from "./slides/8/LifeCycle";

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
      <TrygSlide title="Adding Properties" titlePadding="1rem">
        <AddingProps />
      </TrygSlide>

      {/* Slide -7 States */}
      <TrygSlide title="The State Decorator (@State)" titlePadding="1rem">
        <StateSlide />
      </TrygSlide>

      {/* Slide -8 Life Cycle */}
      <TrygSlide
        title="Component Lifecycle Methods"
        titlePadding="1rem"
        readMoreLink="https://stenciljs.com/docs/component-lifecycle"
      >
        <LifeCycle />
      </TrygSlide>

      {/* Slide -9 Life Cycle */}
      <TrygSlide
        title="Styling"
        titlePadding="1rem"
        readMoreLink="https://stenciljs.com/docs/component-lifecycle"
      >
        <div className="text-black">Styling slides coming soon ... </div>
      </TrygSlide>

      {/* Slide -10 Publishing */}
      <TrygSlide title="Publishing Components" titlePadding="1rem">
        <div className="text-black">Slide about how to publish package</div>
      </TrygSlide>

      {/* Slide -11 Publishing */}
      <TrygSlide
        title="Using stencils components -in React"
        titlePadding="1rem"
      >
        <div className="text-black">How to use components in React</div>
      </TrygSlide>

      {/* Slide -12 Publishing */}
      <TrygSlide title="Using stencils components -in Vue" titlePadding="1rem">
        <div className="text-black">How to use components in React</div>
      </TrygSlide>

      {/* Slide -13 Roadmaps for trygno-ui */}
      <TrygSlide title="Roadmaps for trygno-ui " titlePadding="1rem">
        <div className="text-black">How to use components in React</div>
      </TrygSlide>

      {/* Slide -14 Challenges */}
      <TrygSlide title="Challenges for trygno-ui " titlePadding="1rem">
        <div className="text-black">How to use components in React</div>
      </TrygSlide>

      {/* Slide -15 Challenges */}
      <TrygSlide title="Widgets " titlePadding="1rem">
        <div className="text-black">Creating widgets with stencilsJS</div>
      </TrygSlide>
    </Deck>
  );
}

export default App;
