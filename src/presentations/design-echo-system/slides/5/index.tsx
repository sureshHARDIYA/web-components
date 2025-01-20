import {
  Appear,
  Box,
  Grid,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "spectacle";

import DSEC from "./design_system_echosystem.png";
import COMPONENTS from "./design system components.png";
import CORE from "./core.png";
import TECHNOLOGY from "./technology.png";
import RECIPIE from "./recipie.png";
import SMART from "./smart.png";
import PRDOUCT from "./product.png";

const DesignSystemEchoSystem = () => {
  const handleClick = (step: string) => {
    const stepper = document.querySelector("p-stepper-horizontal");
    const stepElements: any = Array.from(
      document.querySelectorAll("p-stepper-horizontal-item")
    );
    const prevButton = document.querySelector("#prev-button");
    const nextButton = document.querySelector("#next-button");
    const panels = document.querySelectorAll('[id^="step-content"]');

    function getActiveStepIndex(steps: any) {
      return steps.findIndex((step: any) => step.state === "current");
    }

    function manageContent(activeStepIndex: number) {
      if (activeStepIndex === 0) {
        prevButton?.setAttribute("disabled", "true");
      } else {
        prevButton?.removeAttribute("disabled");
      }

      if (activeStepIndex === stepElements.length - 1) {
        nextButton?.setAttribute("disabled", "true");
      } else {
        nextButton?.removeAttribute("disabled");
      }

      panels.forEach((panel, i) => {
        if (i === activeStepIndex) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    }

    function onNextPrevStep(direction: string) {
      const activeStepIndex = getActiveStepIndex(stepElements);

      if (direction === "next") {
        stepElements[activeStepIndex]!.state = "complete";
        stepElements[activeStepIndex + 1].state = "current";
        manageContent(activeStepIndex + 1);
      } else {
        stepElements[activeStepIndex].state = undefined;
        stepElements[activeStepIndex - 1].state = "current";
        manageContent(activeStepIndex - 1);
      }
    }

    // prevButton.addEventListener("click", () => onNextPrevStep("prev"));
    // nextButton.addEventListener("click", () => onNextPrevStep("next"));

    if (step === "prev") {
      onNextPrevStep("prev");
    }

    if (step === "next") {
      onNextPrevStep("next");
    }

    stepper?.addEventListener("update", (e: any) => {
      const { activeStepIndex } = e.detail;

      for (let i = activeStepIndex + 1; i < stepElements.length; i++) {
        // reset step state when going back via stepper horizontal item click
        stepElements[i].state = undefined;
      }
      stepElements[activeStepIndex].state = "current";

      manageContent(activeStepIndex);
    });
  };
  return (
    <div className="text-black">
      <p-stepper-horizontal>
        <p-stepper-horizontal-item state="current">
          Design System Echosystem
        </p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Components</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>
          Core Design System
        </p-stepper-horizontal-item>
        <p-stepper-horizontal-item>
          Technology-specific
        </p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Recipies</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Smart Components</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Products</p-stepper-horizontal-item>
      </p-stepper-horizontal>

      <div id="step-content-0" className="mt-6">
        <Grid gridTemplateColumns="2fr 1fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Image src={DSEC} />
          </Box>
          <Box backgroundColor="primary" p={10}>
            <Text color="black">
              Anchor components : <kbd>PIA, ENDRE</kbd>
            </Text>
          </Box>
        </Grid>
      </div>

      <div id="step-content-1" hidden className="mt-6">
        <Image src={COMPONENTS} width="70%" />
      </div>

      <div id="step-content-2" hidden className="mt-6">
        <Grid gridTemplateColumns="2fr 1fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Image src={CORE} />
          </Box>
          <Box p={10}>
            <p-tag color="notification-success-soft">Buttons</p-tag> &nbsp;
            <p-tag color="notification-success-soft">Alerts</p-tag> &nbsp;
            <p-tag color="notification-success-soft">Dialog</p-tag> &nbsp;
            <br />
            <br />
            <p-tag color="notification-info-soft">design tokens</p-tag> &nbsp;
            <p-tag color="notification-info-soft">fonts</p-tag> &nbsp;
            <p-tag color="notification-info-soft">icons</p-tag> &nbsp;
          </Box>
        </Grid>
      </div>

      <div id="step-content-3" hidden className="mt-6">
        <Grid gridTemplateColumns="2fr 1fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Image src={TECHNOLOGY} />
          </Box>
          <Box p={10}>
            <p-tag color="notification-success-soft">Vue Wrappers</p-tag>
            &nbsp;
            <br />
            <br />
            <p-tag color="notification-info-soft">React Wrappers</p-tag>
            &nbsp;
          </Box>
        </Grid>
      </div>

      <div id="step-content-4" hidden className="mt-6">
        <Image src={RECIPIE} width="70%" />
      </div>

      <div id="step-content-4" hidden className="mt-6">
        <Image src={SMART} width="70%" />
      </div>

      <div id="step-content-4" hidden className="mt-6">
        <Image src={PRDOUCT} width="70%" />
      </div>

      <div id="step-content-3" hidden className="mt-6"></div>

      <div className="fixed bottom-0 w-full  text-white p-4">
        <p-button-group>
          <p-button
            type="button"
            id="prev-button"
            icon="arrow-head-left"
            variant="tertiary"
            disabled="true"
            onClick={() => handleClick("prev")}
          >
            Previous Step
          </p-button>
          <p-button
            type="button"
            id="next-button"
            variant="primary"
            onClick={() => handleClick("next")}
          >
            Next Step
          </p-button>
        </p-button-group>
      </div>
    </div>
  );
};

export default DesignSystemEchoSystem;
