import { Deck } from "spectacle";

import theme from "@/utils/theme";
import Microfrontend from "./slides/4";
import template from "@/theme/template";
import DESTitle from "./slides/1/Title";
import WhatIsDesignSystem from "./slides/2";
import { TrygSlide } from "@/components/TrygSlide";
import ProblemStatements from "./slides/3/Problems";

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
      <TrygSlide>
        <Microfrontend />
      </TrygSlide>
    </Deck>
  );
};

export default DesignEchoSystem;
