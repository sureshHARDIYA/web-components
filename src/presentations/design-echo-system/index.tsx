import { Deck } from "spectacle";

import theme from "@/utils/theme";
import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import DESTitle from "./slides/1/Title";
import WhatIsDesignSystem from "./slides/2";

const DesignEchoSystem = () => {
  return (
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <DESTitle />
      </TrygSlide>

      {/* Agenda Slide 2 */}
      <TrygSlide>
        <WhatIsDesignSystem />
      </TrygSlide>
    </Deck>
  );
};

export default DesignEchoSystem;
