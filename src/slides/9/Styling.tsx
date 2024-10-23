import { Appear, CodePane } from "spectacle";

const Styling = () => {
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
          Styling with the Shadow DOM
        </p-stepper-horizontal-item>
        <p-stepper-horizontal-item>Scoped CSS</p-stepper-horizontal-item>
        <p-stepper-horizontal-item>
          CSS Custom Properties
        </p-stepper-horizontal-item>
        <p-stepper-horizontal-item>CSS Parts</p-stepper-horizontal-item>
      </p-stepper-horizontal>

      <div id="step-content-0" className="mt-6">
        <p-text>
          With the shadow DOM enabled, elements within the shadow root are
          scoped, and styles outside of the component do not apply.
        </p-text>
        <Appear>
          <div className="mt-6 mb-6">
            <p-inline-notification
              heading="Note"
              heading-tag="h3"
              description="The :host pseudo-class selector is used to select the Host element of the component"
              state="warning"
              className="mt-6"
            ></p-inline-notification>
          </div>
        </Appear>
        <Appear>
          <CodePane language="css">
            {`
           :host {
             color: black;
             display: block;
            }

            div {
                background: blue;
            }`}
          </CodePane>
        </Appear>
      </div>
      <div id="step-content-1" hidden className="mt-6">
        <p-text>
          An alternative to using the shadow DOM is using scoped components. You
          can use scoped components by setting the scoped option to true in the
          component decorator.
        </p-text>
        <div className="mt-6">
          <CodePane language="tsx">
            {`
            @Component({
                tag: 'scoped-component',
                styleUrl: 'scoped-component.css',
                scoped: true,
            })
            export class ScopedComponent {}
         `}
          </CodePane>
        </div>
      </div>
      <div id="step-content-2" hidden className="mt-6">
        <p-text>
          CSS custom properties, also often referred to as CSS variables, are
          used to contain values that can then be used in multiple CSS
          declarations.
        </p-text>

        <div className="mt-6 mb-7">
          <Appear>
            <CodePane language="css">
              {`
           :host {
                 --color-primary: blue;
            }`}
            </CodePane>
          </Appear>
        </div>
      </div>
      <div id="step-content-3" hidden className="mt-6">
        <p-text>CSS ::part() pseudo-element.</p-text>
        <div className="mt-6">
          <CodePane language="tsx">
            {`
                return (
                <Host>
                    <h1 part="heading">{this.heading}</h1>
                    <slot></slot>
                </Host>
                );
         `}
          </CodePane>
        </div>
        <div className="mt-6 mb-7">
          <Appear>
            <CodePane language="css">
              {`
                 shadow-card::part(heading) {
                  text-transform: uppercase;
                }`}
            </CodePane>
          </Appear>
        </div>
      </div>

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

export default Styling;
