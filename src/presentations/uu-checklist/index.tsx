import { Deck } from "spectacle";

import theme from "@/utils/theme";

import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import DESTitle from "./slides/1/Title";
import { GeneralPrinciples } from "./slides/2/General";
import Summary from "./slides/last/Summary";

export const CHECKLIST_TITLE = [
  {
    id: 1,
    key: "general",
    title: "General Principles",
  },
  {
    id: 2,
    key: "semantic_structure",
    title: "Semantic Structure & HTML",
  },
  {
    id: 3,
    key: "keyboard_focus",
    title: "Keyboard & Focus",
  },
  {
    id: 4,
    key: "aria",
    title: "ARIA & Assistive Tech",
  },
  {
    id: 5,
    key: "forms_validation",
    title: "Forms & Validation",
  },
  {
    id: 6,
    key: "color_contrast_motion",
    title: "Color, Contrast & Motion",
  },
  {
    id: 7,
    key: "responsive_mobile",
    title: "Responsive & Mobile",
  },
  {
    id: 8,
    key: "media_content",
    title: "Media & Content",
  },
  {
    id: 9,
    key: "testing_ci",
    title: "Testing & CI/CD",
  },
  {
    id: 10,
    key: "workflow_governance",
    title: "Workflow & Governance",
  },
  {
    id: 11,
    key: "mindset",
    title: "Mindset & Culture",
  },
];

const UniversalDesignChecklist = () => {
  return (
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <DESTitle />
      </TrygSlide>

      {CHECKLIST_TITLE.map((list) => (
        <TrygSlide backgroundColor="white" title={list.title} key={list.id}>
          <GeneralPrinciples keyName={list.key} />
        </TrygSlide>
      ))}

      <TrygSlide backgroundColor="white">
        <Summary />
      </TrygSlide>
    </Deck>
  );
};

export default UniversalDesignChecklist;
