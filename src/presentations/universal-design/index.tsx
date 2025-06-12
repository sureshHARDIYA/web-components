import { Deck } from "spectacle";

import theme from "@/utils/theme";

import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import DESTitle from "./slides/1/Title";
import Agenda from "./slides/2/Agenda";
import Agenda2 from "./slides/3/Agenda";
import UniversalDesign from "./slides/4/UniversalDesign";
import Principles from "./slides/5/Principle";

const DesignEchoSystem = () => {
  return (
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <DESTitle />
      </TrygSlide>

      {/* 2: Agenda 1/2? */}
      <TrygSlide title="Today's Menu (1/2)">
        <Agenda />
      </TrygSlide>

      {/* 3: Agenda 2/2 */}
      <TrygSlide title="Today's Menu (2/2)">
        <Agenda2 />
      </TrygSlide>

      {/* 4: Agenda 2/2 */}
      <TrygSlide title="Universal Design">
        <UniversalDesign />
      </TrygSlide>

      {/* 5: Principles of Universal Design */}
      <TrygSlide>
        <Principles />
      </TrygSlide>
    </Deck>
  );
};

export default DesignEchoSystem;
