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

const FormLabels = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent page reload

    alert("Form submitted ");
  };

  return (
    <p-tabs size="medium">
      <p-tabs-item label="Form Labels">
        <Box backgroundColor="primary" className="p-4">
          Form fields can be confusing for screen reader users. There are many
          ways to label form fields so the label is read out loud whenever the
          field has focus.
          <br />
          <br />
          <CodePane language="html" theme={customTheme}>
            {`<label>First Name</label>
            
<p>First Name </p>

<div>First Name </div>
            `}
          </CodePane>
        </Box>
      </p-tabs-item>
      <p-tabs-item label="Antipatterns">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">Div or Paragraph as label</p-heading>
          <br />
          <div className="grid grid-cols-2">
            <CodePane language="html" theme={customTheme}>
              {`<form>
    <p>First Name </p>
     <input type="text" name="firstName" />
     <p>Last Name </p>
     <input type="text" name="lastName" />
     <input type="submit" value="Submit" />
</form>`}
            </CodePane>
            <div className="px-8">
              <form onSubmit={handleSubmit}>
                <p>First Name </p>
                <input type="text" name="firstName" />
                <p>Last Name </p>
                <input type="text" name="lastName" />
                <br />
                <input type="submit" value="Submit" />
              </form>

              <br />
              <p-heading size="small">
                A screen reader will read this as “Edit text, blank” to the
                user.
              </p-heading>
            </div>
          </div>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="HTML Labels">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">Div or Paragraph as label</p-heading>
          <br />
          <div className="grid grid-cols-2">
            <CodePane language="html" theme={customTheme}>
              {`<form>
    <label for="firstName">First Name </label>
    <input id="firstName" type="text" name="firstName" />
    <label for="lastName">Last Name </label>
    <input type="text" name="lastName" id="lastName" />
    <input type="submit" value="Submit" />
</form>`}
            </CodePane>
            <div className="px-8">
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name </label> <br />
                <input id="firstName" type="text" name="firstName" />
                <br />
                <label htmlFor="lastName">Last Name </label> <br />
                <input type="text" name="lastName" id="lastName" />
                <br />
                <input type="submit" value="Submit" />
              </form>
              <br />
              <p-heading size="small">
                A screen reader will read this as “First Name, edit text, blank”
                to the user.
              </p-heading>
            </div>
          </div>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Limitations ">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            The label tag can only works with "labelable" elements. Those
            include:
          </p-heading>
          <br />
          <p-text-list>
            <p-text-list-item>
              <code>{"<input>"}</code>
            </p-text-list-item>
            <p-text-list-item>
              <code>{"<keygen>"}</code>
            </p-text-list-item>
            <p-text-list-item>
              <code>{"<meter>"}</code>
            </p-text-list-item>
            <p-text-list-item>
              <code>{"<output>"}</code>
            </p-text-list-item>
            <p-text-list-item>
              <code>{"<progress>"}</code>
            </p-text-list-item>
            <p-text-list-item>
              <code>{"<select>"}</code>
            </p-text-list-item>
            <p-text-list-item>
              <code>{"<textarea>"}</code>
            </p-text-list-item>
          </p-text-list>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="aria-label ">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            If you ever need to label an element not on that list, use
            aria-label instead.
          </p-heading>
          <br />
          <CodePane language="html" theme={customTheme}>
            {`<div aria-label="This is accordian header">This is accordian header</div>`}
          </CodePane>
          <br />
          📢 What the screen reader will announce: “This is accordian header”
        </Box>
      </p-tabs-item>
    </p-tabs>
  );
};

export default FormLabels;
