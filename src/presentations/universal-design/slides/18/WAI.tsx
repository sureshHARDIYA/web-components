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

const ARIALabels = () => {
  return (
    <p-tabs size="medium">
      <p-tabs-item label="WAI-ARIA vs. WCAG">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            <span className="underline mr-1">WCAG </span>sets the overall
            accessibility standards (like requiring sufficient color contrast)
          </p-heading>

          <br />
          <p-heading size="medium">
            <span className="underline mr-1">WAI-ARIA </span> provides
            techniques to meet those standards, especially for complex, dynamic
            content (like using the aria-label attribute to give a name to a
            custom-built component).
          </p-heading>
        </Box>
      </p-tabs-item>
      <p-tabs-item label="Labels, revisited">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            Earlier, we learned about the <code>{"<label>"}</code>tag in HTML
            and how it can be used to label certain form elements.
          </p-heading>
        </Box>
        <br />
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="small">
            The ARIA spec provides us with great tools for labelling and
            describing any element we want. They are:.
          </p-heading>
          <br />- aria-label <br />- aria-labelledby <br /> -aria-describedby
        </Box>
      </p-tabs-item>

      <p-tabs-item label="labelledby vs. describedby">
        <Box backgroundColor="primary" className="p-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <p-heading size="medium">
                A label provides essential information about an object, while a
                description provides extended information that the user might
                need.
              </p-heading>
              <br />
              <CodePane language="html" theme={customTheme}>
                {`<label id="quantity-label" for="quantity">Quantity:</label>
  
  <input
    type="number"
    id="quantity"
    aria-labelledby="quantity-label"
    aria-describedby="quantity-description"
    value="1"
    min="1"
  >

  <p id="quantity-description">
    Enter the desired quantity (1–10).
  </p>

  <button type="submit">Add to Cart</button>
`}
              </CodePane>
            </div>
            <div>
              <p-heading size="small">
                When the user focuses on the <code>input</code> field, the
                screen reader will read the following in sequence:
              </p-heading>
              - <code>aria-labelledby="quantity-label"</code> and it will read
              out "Quantity:" <br />-
              <code>aria-describedby="quantity-description"</code> and it will
              read out "Enter the desired quantity (1–10)."
              <br />
              <br />
              When the user tabs into the input, it would read something like:{" "}
              <br />
              <br />
              "Quantity. Edit number. Enter the desired quantity (1–10)."
            </div>
          </div>
        </Box>
      </p-tabs-item>

      <p-tabs-item
        label="Roles, States and Properties
"
      >
        <Box backgroundColor="primary" className="p-4">
          ARIA also provides roles which can be applied to any element. Examples
          include:
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <p-text-list>
              <p-text-list-item>button</p-text-list-item>
              <p-text-list-item>checkbox</p-text-list-item>
              <p-text-list-item>tree</p-text-list-item>
              <p-text-list-item>banner</p-text-list-item>
              <p-text-list-item>aria-autocomplete</p-text-list-item>
              <p-text-list-item>aria-haspopup</p-text-list-item>
              <p-text-list-item>alert</p-text-list-item>
              <p-text-list-item>alertdialog</p-text-list-item>
              <p-text-list-item>application</p-text-list-item>
              <p-text-list-item>article</p-text-list-item>
              <p-text-list-item>columnheader</p-text-list-item>
              <p-text-list-item>combobox</p-text-list-item>
              <p-text-list-item>complementary</p-text-list-item>
              <p-text-list-item>contentinfo</p-text-list-item>
              <p-text-list-item>dialog</p-text-list-item>
            </p-text-list>

            <p-text-list>
              <p-text-list-item>document</p-text-list-item>
              <p-text-list-item>feed</p-text-list-item>
              <p-text-list-item>form</p-text-list-item>
              <p-text-list-item>grid</p-text-list-item>
              <p-text-list-item>gridcell</p-text-list-item>
              <p-text-list-item>group</p-text-list-item>
              <p-text-list-item>heading</p-text-list-item>
              <p-text-list-item>img</p-text-list-item>
              <p-text-list-item>link</p-text-list-item>
              <p-text-list-item>list</p-text-list-item>
              <p-text-list-item>listbox</p-text-list-item>
              <p-text-list-item>listitem</p-text-list-item>
              <p-text-list-item>log</p-text-list-item>
              <p-text-list-item>main</p-text-list-item>
              <p-text-list-item>marquee</p-text-list-item>
            </p-text-list>

            <p-text-list>
              <p-text-list-item>menu</p-text-list-item>
              <p-text-list-item>menubar</p-text-list-item>
              <p-text-list-item>menuitem</p-text-list-item>
              <p-text-list-item>menuitemcheckbox</p-text-list-item>
              <p-text-list-item>menuitemradio</p-text-list-item>
              <p-text-list-item>navigation</p-text-list-item>
              <p-text-list-item>none</p-text-list-item>
              <p-text-list-item>note</p-text-list-item>
              <p-text-list-item>option</p-text-list-item>
              <p-text-list-item>presentation</p-text-list-item>
              <p-text-list-item>progressbar</p-text-list-item>
              <p-text-list-item>radio</p-text-list-item>
              <p-text-list-item>radiogroup</p-text-list-item>
              <p-text-list-item>region</p-text-list-item>
              <p-text-list-item>row</p-text-list-item>
            </p-text-list>

            <p-text-list>
              <p-text-list-item>rowgroup</p-text-list-item>
              <p-text-list-item>rowheader</p-text-list-item>
              <p-text-list-item>scrollbar</p-text-list-item>
              <p-text-list-item>search</p-text-list-item>
              <p-text-list-item>searchbox</p-text-list-item>
              <p-text-list-item>separator</p-text-list-item>
              <p-text-list-item>slider</p-text-list-item>
              <p-text-list-item>spinbutton</p-text-list-item>
              <p-text-list-item>status</p-text-list-item>
              <p-text-list-item>switch</p-text-list-item>
              <p-text-list-item>tab</p-text-list-item>
              <p-text-list-item>table</p-text-list-item>
              <p-text-list-item>tablist</p-text-list-item>
              <p-text-list-item>tabpanel</p-text-list-item>
              <p-text-list-item>term</p-text-list-item>
              <p-text-list-item>textbox</p-text-list-item>
              <p-text-list-item>timer</p-text-list-item>
              <p-text-list-item>toolbar</p-text-list-item>
              <p-text-list-item>tooltip</p-text-list-item>
            </p-text-list>
          </div>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="ARIA in CSS">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            ARIA properties can be accessed in CSS!
          </p-heading>
          <br />

          <CodePane language="css">
            {`.dropdown[aria-expanded="false"] .icon::after {
  content: '▶';
}

.dropdown[aria-expanded="true"] .icon::after {
  content: '▼';
}`}
          </CodePane>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Live Regions">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            Applications can become very dynamic. For cases where important
            information could be coming in at any time, the ARIA spec provides
            the ability to mark an element as containing live data so that
            screen readers can read out updates as they come.
          </p-heading>
          <br />

          <p-text-list>
            <p-text-list-item>
              One of my favorite APIs of all time, the value that you pass in to
              <code className="mx-2">aria-live</code> is a politeness setting.
              You can pass in:
              <p-text-list>
                <p-text-list-item>
                  <code>assertive</code> – will interrupt whatever it's doing to
                  announce.
                </p-text-list-item>
                <p-text-list-item>
                  <code>polite</code> – will announce the live region update
                  when it next idles.
                </p-text-list-item>
                <p-text-list-item>
                  <code>off</code> – will not read the update.
                </p-text-list-item>
              </p-text-list>
            </p-text-list-item>
          </p-text-list>
        </Box>
        <br />

        <CodePane language="html">
          {`<div>
  <button onclick="document.getElementById('live').textContent = 'New notification received!'">
    Notify
  </button>
  <div id="live" aria-live="polite">
    <!-- Live messages appear here -->
  </div>
</div>`}
        </CodePane>
      </p-tabs-item>
    </p-tabs>
  );
};

export default ARIALabels;
