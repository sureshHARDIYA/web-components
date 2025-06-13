import { Appear, Box, CodePane } from "spectacle";

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

const DivAsHTML = () => {
  return (
    <p-tabs size="medium">
      <p-tabs-item label="Div as button">
        <div className="grid grid-cols-2">
          <div className="scenarios">
            <p-heading size="medium">
              1. Let’s make a button (with a div!)
            </p-heading>
            <Appear priority={1}>
              <p-heading size="medium">
                2. Tell screen readers it’s clickable
              </p-heading>
            </Appear>
            <Appear priority={2}>
              <p-heading size="medium">3. Allow user to tab to it</p-heading>
            </Appear>

            <Appear priority={3}>
              <p-heading size="medium">
                4. Allow keyboard users to interact with it!
              </p-heading>
            </Appear>

            <Appear priority={4}>
              <p-heading size="medium">
                5. Tell screen readers what it does!
              </p-heading>
            </Appear>

            <Appear priority={4}>
              <br />
              <CodePane language="tsx" theme={customTheme}>
                {`<div 
    role="button" 
    onClick={getBergenPrice} 
    tabindex="0" 
    onKeyUp={listenToEnterAndSpace}
    aria-label="Get Bergen Price">
    Bergen Pris
</div>`}
              </CodePane>
            </Appear>
          </div>
          <div>
            <CodePane language="tsx" theme={customTheme}>
              {`<div onClick={getBergenPrice}>Bergen Pris</div>`}
            </CodePane>

            <Appear priority={1}>
              <br />
              <CodePane language="tsx" theme={customTheme}>
                {`<div role="button" onClick={getBergenPrice}>
    Bergen Pris
</div>`}
              </CodePane>
            </Appear>

            <Appear priority={2}>
              <br />
              <CodePane language="tsx" theme={customTheme}>
                {`<div role="button" onClick={getBergenPrice} tabindex="0">
    Bergen Pris
</div>`}
              </CodePane>
            </Appear>
            <Appear priority={3}>
              <br />
              <CodePane language="tsx" theme={customTheme}>
                {`<div 
    role="button" 
    onClick={getBergenPrice} 
    tabindex="0" 
    onKeyUp={listenToEnterAndSpace} >
    Bergen Pris
</div>`}
              </CodePane>
            </Appear>
          </div>
        </div>
      </p-tabs-item>
      <p-tabs-item label="Semantic button">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">Or, just use a button</p-heading>
          <br />

          <CodePane language="tsx" theme={customTheme}>
            {`<button onClick={getBergenPrice}>Bergen Pris</button>`}
          </CodePane>
        </Box>
      </p-tabs-item>
    </p-tabs>
  );
};

export default DivAsHTML;
