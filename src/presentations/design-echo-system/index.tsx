import { Deck } from "spectacle";

import theme from "@/utils/theme";
// import Microfrontend from "./slides/4";
import DESTitle from "./slides/1/Title";
import template from "@/theme/template";
import WhatIsDesignSystem from "./slides/2";
import { TrygSlide } from "@/components/TrygSlide";
import ProblemStatements from "./slides/3/Problems";
import DesignSystemEchoSystem from "./slides/5";

const DesignEchoSystem = () => {
  return (
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <DESTitle />
      </TrygSlide>

      {/* 2: What is DS? */}
      <TrygSlide>
        <WhatIsDesignSystem />
      </TrygSlide>

      {/* 3: Problem Statement */}
      <TrygSlide title="Challenges">
        <ProblemStatements />
      </TrygSlide>

      {/* 4: Tryg vision */}
      {/* <TrygSlide
        title="Microfrontend Architecture / Widgets"
        titlePadding="0rem"
      >
        <Microfrontend />
      </TrygSlide> */}

      {/* 5: Design System Echosystem */}
      <TrygSlide title="Design System Echosystem" titlePadding="0rem">
        <DesignSystemEchoSystem />
      </TrygSlide>
    </Deck>
  );
};

export default DesignEchoSystem;
