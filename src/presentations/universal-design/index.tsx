import { Deck } from "spectacle";

import theme from "@/utils/theme";

import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import DESTitle from "./slides/1/Title";
import Agenda from "./slides/2/Agenda";
import Agenda2 from "./slides/3/Agenda";
import UniversalDesign from "./slides/4/UniversalDesign";
import Principles from "./slides/5/Principle";
import Compliance from "./slides/6/Compliance";
import Consquences from "./slides/6/Second";
import ConformanceLevel from "./slides/7/Specifications";
import ScreenReader, { ScreenReader2 } from "./slides/8/ScreenReader";
import CurbCutEffect from "./slides/9/CurbCutEffect";
import ScreenReaders from "./slides/10/ScreenReader";
import SemanticWeb from "./slides/11/SemanticWeb";
import SemanticHTML from "./slides/12/SemanticHTML";
import DivAsHTML from "./slides/13/DivAsHTML";
import FormLabels from "./slides/14/FormElements";
import FocusHandling from "./slides/15/FcousManagement";
import SkipLinks from "./slides/16/SkipLinks";

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

      {/* 4 */}
      <TrygSlide title="Universal Design">
        <UniversalDesign />
      </TrygSlide>

      {/* 5: Principles of Universal Design */}
      <TrygSlide>
        <Principles />
      </TrygSlide>

      {/* 6 */}
      <TrygSlide title="Legal Landscape and Compliance">
        <Compliance />
      </TrygSlide>

      {/* 7 */}
      <TrygSlide title="Consequences of Non-Compliance">
        <Consquences />
      </TrygSlide>

      {/* 8 */}
      <TrygSlide title="Standards & Specifications">
        <ConformanceLevel />
      </TrygSlide>

      {/* 9 */}
      <TrygSlide title="Assistive Technologies (Web) - (1/2)">
        <ScreenReader />
      </TrygSlide>

      {/* 10 */}
      <TrygSlide title="Assistive Technologies (Web) - (2/2)">
        <ScreenReader2 />
      </TrygSlide>

      {/* 11 */}
      <TrygSlide title="The curb cut effect">
        <CurbCutEffect />
      </TrygSlide>

      {/* 12: Screen readers */}
      <TrygSlide title="Screen readers">
        <ScreenReaders />
      </TrygSlide>

      {/* 13: Semantic HTML */}
      <TrygSlide title="Semantic Web and Semantic HTML">
        <SemanticWeb />
      </TrygSlide>

      {/* 12: Semantic HTML */}
      <TrygSlide title="Semantic HTML">
        <SemanticHTML />
      </TrygSlide>

      {/* 13: DIVs are not HTML */}
      <TrygSlide title="DIVs are not button">
        <DivAsHTML />
      </TrygSlide>

      {/* 14: FormLabels */}
      <TrygSlide title="Form Labels">
        <FormLabels />
      </TrygSlide>

      {/* 15: Focus Management */}
      <TrygSlide title="Focus Handling & Management">
        <FocusHandling />
      </TrygSlide>

      {/* 16: Skip Links */}
      <TrygSlide title="Skip Links">
        <SkipLinks />
      </TrygSlide>
    </Deck>
  );
};

export default DesignEchoSystem;
