import { Deck } from "spectacle";

import theme from "@/utils/theme";

import template from "@/theme/template";
import DESTitle from "./slides/1/Title";
import Agenda from "./slides/2/Agenda";
import Agenda2 from "./slides/3/Agenda";
import Consquences from "./slides/6/Second";
import Principles from "./slides/5/Principle";
import DivAsHTML from "./slides/13/DivAsHTML";
import Compliance from "./slides/6/Compliance";
import SemanticWeb from "./slides/11/SemanticWeb";
import FormLabels from "./slides/14/FormElements";
import { TrygSlide } from "@/components/TrygSlide";
import ScreenReaders from "./slides/10/ScreenReader";
import SemanticHTML from "./slides/12/SemanticHTML";
import CurbCutEffect from "./slides/9/CurbCutEffect";
import ConformanceLevel from "./slides/7/Specifications";
import FocusHandling from "./slides/15/FcousManagement";
import UniversalDesign from "./slides/4/UniversalDesign";
import SkipLinks2, { SkipLinks1 } from "./slides/16/SkipLinks";
import ScreenReader, { ScreenReader2 } from "./slides/8/ScreenReader";
import Tabbable from "./slides/17/Tab";
import ARIALabels from "./slides/18/WAI";
import Tooling, { Tooling1, Tooling2, Tooling3 } from "./slides/19/Tooling";

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
      <TrygSlide>
        <SkipLinks1 />
      </TrygSlide>

      <TrygSlide title="Skip Links">
        <SkipLinks2 />
      </TrygSlide>

      {/* 17: Tabs */}
      <TrygSlide title="Tab Navigation">
        <Tabbable />
      </TrygSlide>

      {/* 18: Tabs */}
      <TrygSlide title="WAI-ARIA Vs. WCAG">
        <ARIALabels />
      </TrygSlide>

      {/* 19: Testing and Tooling */}
      <TrygSlide title="Testing and Tooling">
        <Tooling />
      </TrygSlide>

      <TrygSlide title="Google Lighthouse">
        <Tooling1 />
      </TrygSlide>

      <TrygSlide title="Wave by WebAIM">
        <Tooling2 />
      </TrygSlide>

      <TrygSlide title="Axe-core by Deque">
        <Tooling3 />
      </TrygSlide>
    </Deck>
  );
};

export default DesignEchoSystem;
