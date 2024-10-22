import { Appear, CodePane, Image, SlideLayout } from "spectacle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

import generate from "./images/generate.png";

const LeftComponet = () => {
  const codeString = "$ npm run generate";

  return (
    <div className="flex flex-col text-black">
      <h1 className="text-4xl font-bold">A new web component</h1>
      <Appear>
        <SyntaxHighlighter language="bash" style={dark}>
          {codeString}
        </SyntaxHighlighter>
      </Appear>
      <Appear>
        <Image src={generate} />
      </Appear>
    </div>
  );
};

const RightComponet = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-black">
      <Appear>
        <h1 className="text-4xl font-bold">Generated component</h1>
        <CodePane
          language="tsx"
          theme={tomorrow}
          highlightRanges={[1, [3, 7], [11, 13]]}
          // highlightRanges={[[18, 21], 3, [5, 7], [9, 10], 11]}
        >
          {`
        import { Component, Host, h } from '@stencil/core';

          @Component({
            tag: 'my-custom-input',
            styleUrl: 'my-custom-input.css',
            shadow: true,
          })
          export class MyCustomInput {
            render() {
              return (
                <Host>
                  <slot></slot>
                </Host>
              );
            }
          }
      `}
        </CodePane>
      </Appear>
      <Appear className="mt-8">
        <CodePane language="html">
          {`
          <my-custom-input>This is my custom string.</my-custom-input> 
        `}
        </CodePane>
      </Appear>
    </div>
  );
};

const FreshComponent = () => {
  return (
    <div id="treeWrapper" className="w-full h-screen bg-gray-50 p-4">
      <SlideLayout.TwoColumn
        backgroundColor="white"
        backgroundImage="url(https://play.tailwindcss.com/img/beams.jpg)"
        left={<LeftComponet />}
        right={<RightComponet />}
      ></SlideLayout.TwoColumn>
    </div>
  );
};

export default FreshComponent;
