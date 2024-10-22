import ReactDiffViewer from "react-diff-viewer";

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
        <input name={this.name} type={this.type} />
      </Host>
    );
  }
}
`;

const AddingProps = () => {
  return (
    <div className="text-black">
      <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
    </div>
  );
};

export default AddingProps;