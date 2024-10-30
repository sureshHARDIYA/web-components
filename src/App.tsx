import { Deck } from "spectacle";

import Title from "./slides/Title";
import { trygTheme } from "@/theme";
import Agenda from "./slides/Agenda";
import template from "./theme/template";
import Styling from "./slides/9/Styling";
import StateSlide from "./slides/7/States";
import ShadowDOM from "./slides/5/ShadowDOM";
import RoadMaps from "./slides/13/RoadMaps";
import LifeCycle from "./slides/8/LifeCycle";
import AddingProps from "./slides/AddingProps";
import Publishing from "./slides/10/Publishing";
import UsingComponents from "./slides/11/Using";
import Challenges from "./slides/14/Challenges";
import { TrygSlide } from "@/components/TrygSlide";
import WhyShadowDOM from "./slides/5/WhyShadowDOM";
import FreshComponent from "./slides/FeshComponent";
import WidgetsWithStencil from "./slides/15/Widets";
import GettingStarted from "./slides/GettingStarted";
import ReactLifeCycle from "./slides/8/ReactLifeCycle";
import WhatWhyWidget from "./slides/15/WhatWhyWidget";
import UsingComponents2 from "./slides/11/UsingMethod2";
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

      {/* Slide -5.1 */}
      <TrygSlide title="Can you see the shadow?" titlePadding="1rem">
        <ShadowDOM />
      </TrygSlide>

      {/* Slide -5.2 */}
      <TrygSlide
        title="Why shadow DOM?"
        titlePadding="1rem"
        readMoreLink="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html"
      >
        <WhyShadowDOM />
      </TrygSlide>

      {/* Slide -6 Adding Props */}
      <TrygSlide title="Adding Properties" titlePadding="1rem">
        <AddingProps />
      </TrygSlide>

      {/* Slide -7 States */}
      <TrygSlide title="The State Decorator (@State)" titlePadding="1rem">
        <StateSlide />
      </TrygSlide>

      {/* Slide -7.1 Exposing Methods */}
      <TrygSlide title="Exposing Methods (@Method)" titlePadding="10px">
        <iframe
          src="https://codesandbox.io/p/devbox/clever-hertz-nv3q6p?workspaceId=166d4d40-e502-4113-9b65-96b3133ca210&embed=1"
          className="w-full min-h-full border-0 border-radius-[4px] overflow-hidden"
          title="clever-hertz-nv3q6p"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </TrygSlide>

      {/* Slide -8 Life Cycle */}
      <TrygSlide
        title="Component Lifecycle Methods"
        titlePadding="1rem"
        readMoreLink="https://stenciljs.com/docs/component-lifecycle"
      >
        <LifeCycle />
      </TrygSlide>

      {/* Slide -8 Life Cycle 2 */}
      <TrygSlide
        title="React lifecycle comparison"
        titlePadding="1rem"
        readMoreLink="https://stenciljs.com/docs/component-lifecycle"
      >
        <ReactLifeCycle />
      </TrygSlide>

      {/* Slide -9 Life Cycle */}
      <TrygSlide title="Styling" titlePadding="1rem">
        <Styling />
      </TrygSlide>

      {/* Slide -10 Publishing */}
      <TrygSlide title="Publishing Components" titlePadding="1rem">
        <Publishing />
      </TrygSlide>

      {/* Slide -11 Using components -method 1 */}
      <TrygSlide
        title="Using trygno-ui components -in React/Vue"
        titlePadding="1rem"
      >
        <UsingComponents />
      </TrygSlide>

      {/* Slide -11 Using components -method 2 */}
      <TrygSlide
        title="Using stencils components -in React/Vue"
        titlePadding="1rem"
      >
        <UsingComponents2 />
      </TrygSlide>

      {/* Slide -13 Roadmaps for trygno-ui */}
      <TrygSlide title="Roadmaps for trygno-ui " titlePadding="1rem">
        <div className="text-black">
          <RoadMaps />
        </div>
      </TrygSlide>

      {/* Slide -16 Widgets */}
      <TrygSlide title="Demo" titlePadding="1rem">
        <div className="text-black">
          <p-link-pure href="https://trygno-ui.dev.jee.prd1.prdroot.net/">
            https://trygno-ui.dev.jee.prd1.prdroot.net/
          </p-link-pure>
        </div>
      </TrygSlide>

      {/* Slide -14 Challenges */}
      <TrygSlide title="Challenges for trygno-ui " titlePadding="1rem">
        <Challenges />
      </TrygSlide>

      {/* Slide -15 Widgets & Why */}
      <TrygSlide title="Widgets - what/why?" titlePadding="1rem">
        <WhatWhyWidget />
      </TrygSlide>

      {/* Slide -15 Widgets */}
      <TrygSlide title="Widgets" titlePadding="1rem">
        <WidgetsWithStencil />
      </TrygSlide>
    </Deck>
  );
}

export default App;
