import ReactDiffViewer from "react-diff-viewer";
import { Appear, CodePane } from "spectacle";

const oldCode = `
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
`;

const newCode = `
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-custom-input',
  styleUrl: 'my-custom-input.css',
  shadow: true,
})
export class MyCustomInput {
  @Prop() name: string;

  @Prop() type: string;

  render() {
    return (
      <Host>
        <slot></slot>
        <input name={this.name} type={this.type} />
      </Host>
    );
  }
}
`;

const AddingProps = () => {
  return (
    <Appear className="text-black">
      <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
      <Appear className="mt-4">
        <CodePane language="html">{`<my-custom-input name="name" type="text"></my-custom-input> `}</CodePane>
      </Appear>
    </Appear>
  );
};

export default AddingProps;
