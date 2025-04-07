import { Deck } from "spectacle";

import theme from "@/utils/theme";
// import Microfrontend from "./slides/4";
import DESTitle from "./slides/1/Title";
import template from "@/theme/template";
import WhatIsDesignSystem from "./slides/2";
import { TrygSlide } from "@/components/TrygSlide";
import DesignSystemEchoSystemGeneral from "./slides/3/DSES";
import DesignSystemEchoSystem from "./slides/4";
import NordicDesignSystem from "./slides/5";
import RoadMaps from "./slides/6/Roadmaps";
import Summary from "./slides/7";

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

      {/* 3: What is DSES? */}
      <TrygSlide title="Design System Ecosystem" titlePadding="0rem">
        <DesignSystemEchoSystemGeneral />
      </TrygSlide>

      {/* 4: Design System Echosystem */}
      <TrygSlide title="Design System Echosystem" titlePadding="0rem">
        <DesignSystemEchoSystem />
      </TrygSlide>

      {/* 5-: Design System Echosystem */}
      <TrygSlide title="Roadmaps" titlePadding="0rem">
        <RoadMaps />
      </TrygSlide>

      {/* 6: Design System Echosystem */}
      <TrygSlide
        title="Nordic Design System/Norwegian Design System"
        titlePadding="0rem"
      >
        <NordicDesignSystem />
      </TrygSlide>

      {/* 7: Summary */}
      <TrygSlide title="Take away" titlePadding="0rem">
        <Summary />
      </TrygSlide>
    </Deck>
  );
};

export default DesignEchoSystem;
