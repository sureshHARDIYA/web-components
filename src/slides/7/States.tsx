import { Appear, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import App from "@/App";

// Clone and modify the tomorrow theme
const customTheme = {
  ...tomorrow,
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontSize: "14px",
    overflow: "auto",
    lineHeight: "1.1",
  },
};

const StateSlide = () => {
  const handleClick = () => {
    const switchElement = document.querySelector("p-switch");

    if (switchElement?.hasAttribute("checked")) {
      switchElement.removeAttribute("checked");
    } else {
      switchElement?.setAttribute("checked", "true");
    }
  };

  return (
    <div className="text-black">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 text-sm">
          <CodePane
            language="tsx"
            theme={customTheme}
            highlightRanges={[1, 9, [11, 13]]}
          >
            {`
            import { Component, State, h } from '@stencil/core';

            @Component({
            tag: 'p-switch',
            styleUrl: 'toggle-switch.css', 
            shadow: true, 
            })
            export class ToggleSwitch {
                @State() isOn: boolean = false;

                toggleSwitch = () => {
                    this.isOn = !this.isOn; // Toggle the boolean state
                };
                render() {
                    return (
                    <div>
                        <span>{this.isOn ? 'ON' : 'OFF'}</span>
                        <button onClick={this.toggleSwitch}>
                        {this.isOn ? 'Turn Off' : 'Turn On'}
                        </button>
                    </div>
                    );
                }
            }
        `}
          </CodePane>
        </div>
        <div className="bg-gray-200 p-4">
          <Appear>
            <CodePane language="html">{`
            <p-switch hide-label="false">
              Are you really a developer?
            </p-switch>`}</CodePane>
          </Appear>
          <Appear className="mt-8">
            <p-switch hide-label="false" onClick={handleClick}>
              Are you really a developer?
            </p-switch>
          </Appear>
          <Appear className="mt-6">
            <p-inline-notification
              heading="When to use internal state?"
              heading-tag="h3"
              description="Stencil provides a decorator to trigger a rerender when certain class members change. @State() should be used for all class members that should trigger a rerender when they change."
            ></p-inline-notification>
          </Appear>
          <Appear className="mt-6">
            <p-inline-notification
              heading="Listing | Watching changes to the State"
              heading-tag="h3"
              description="StencilsJS provides @Listen() decorator to listen to changes in the state. This is useful when you want to listen to changes in the state and perform some action."
            ></p-inline-notification>
          </Appear>
          <Appear className="mt-2">
            <CodePane language="tsx" theme={customTheme}>{`
              @Listen('click', { capture: true })
              handleClick() {
                this.isOpen = !this.isOpen;
              }
           `}</CodePane>
          </Appear>
        </div>
      </div>
    </div>
  );
};

export default StateSlide;
