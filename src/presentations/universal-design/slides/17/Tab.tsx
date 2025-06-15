import { Box, CodePane } from "spectacle";

import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

const customTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "18px",
    overflow: "auto",
    lineHeight: "0.9",
  },
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontSize: "18px",
    overflow: "auto",
    lineHeight: "0.9",
  },
};

const Tabbable = () => {
  return (
    <p-tabs size="medium">
      <p-tabs-item label="Tab Navigation">
        <p-heading size="medium">
          You can use the tab key to navigate to the next tabbable item and
          shift + tab to navigate to the previous item.
        </p-heading>
      </p-tabs-item>
      <p-tabs-item label="Tabbable elements">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            <code>{"<a>"}</code>, <code>{"<button>"}</code>,{" "}
            <code>{"<input>"}</code>, <code>{"<select>"}</code>,{" "}
            <code>{"<textarea>"}</code>, and <code>{"<iframe>"}</code>
          </p-heading>
          <br />

          <CodePane language="tsx" theme={customTheme}>
            {` import isFocussable from '@tryg/utils';            
            `}
          </CodePane>
        </Box>
      </p-tabs-item>
      <p-tabs-item label="Making an element tabbable">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            You can add the <code>tabindex</code> attribute to any element like
            this:
          </p-heading>
          <br />

          <CodePane language="tsx" theme={customTheme}>
            {`<div tabindex="0">I am focussable</div>`}
          </CodePane>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Active Element">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="small">
            Sometimes, especially on single page applications, it's helpful to
            store the currently focused element before a page transition so you
            can return to it later
          </p-heading>
          <br />

          <CodePane language="tsx" theme={customTheme}>
            {`const activeElement = document.activeElement;
activeElement?.focus();`}
          </CodePane>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Tab trapping">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="small">
            Another useful concept is tab trapping. Consider opening a modal on
            a page which contains a form. A keyboard only user will want to tab
            around the form but unless we help, tabbing while focused on the
            last form element will send us all the way back to the main
            document.
          </p-heading>
          <br />
          demo ...
        </Box>
      </p-tabs-item>
    </p-tabs>
  );
};

export default Tabbable;
