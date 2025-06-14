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

const FocusHandling = () => {
  return (
    <p-tabs size="medium">
      <p-tabs-item label="Focus Management">
        <Box backgroundColor="primary" className="p-4">
          Intentionally setting or controlling which element gets focus in
          response to UI or lifecycle changes.
          <br />
          <br />
          <Appear>
            <p-table>
              <p-table-head>
                <p-table-head-row>
                  <p-table-head-cell>Page Type</p-table-head-cell>
                  <p-table-head-cell>Where Focus Should Go</p-table-head-cell>
                  <p-table-head-cell>Why</p-table-head-cell>
                </p-table-head-row>
              </p-table-head>
              <p-table-body>
                <p-table-row>
                  <p-table-cell>Form page</p-table-cell>
                  <p-table-cell>
                    First input field (<code>&lt;input&gt;</code>,{" "}
                    <code>&lt;textarea&gt;</code>)
                  </p-table-cell>
                  <p-table-cell>
                    Helps keyboard users start filling immediately
                  </p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>Dialog/modal</p-table-cell>
                  <p-table-cell>
                    First focusable element <strong>inside</strong> the modal
                  </p-table-cell>
                  <p-table-cell>
                    Keeps focus trapped and context intact
                  </p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>Error page / Alert</p-table-cell>
                  <p-table-cell>
                    Error message or main alert region
                  </p-table-cell>
                  <p-table-cell>
                    Immediately informs the user what went wrong
                  </p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>Single-page app route change</p-table-cell>
                  <p-table-cell>
                    Main heading or content area (<code>&lt;h1&gt;</code>)
                  </p-table-cell>
                  <p-table-cell>
                    Resets logical focus for screen readers
                  </p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>Search results page</p-table-cell>
                  <p-table-cell>Main content area or result list</p-table-cell>
                  <p-table-cell>
                    Skips nav/header, jumps to results
                  </p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>Regular content page</p-table-cell>
                  <p-table-cell>
                    No automatic focus (let users control)
                  </p-table-cell>
                  <p-table-cell>
                    Don’t hijack unless needed — may confuse screen reader users
                  </p-table-cell>
                </p-table-row>
              </p-table-body>
            </p-table>
          </Appear>
        </Box>
      </p-tabs-item>
      <p-tabs-item label="Single Page Apps">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            on route change -Main heading or content area <code>{"<h1>"}</code>
          </p-heading>
        </Box>
        <br />
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="small">
            Can we have more than one <code>{"<h1>"}</code> on a page? <br />-
            Yes. As long as they are used meaningfully to structure the content.
          </p-heading>
          <br />
          <p-link-pure href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html">
            <span className="text-blue-500">
              WCAG 2.2 Success Criterion 2.4.6 — Headings and Labels
            </span>
          </p-link-pure>
          <br /> <br />
          <CodePane language="html" theme={customTheme}>
            {`<article>
  <h1>Article Title</h1>
</article>

<section>
  <h1>Section Title</h1>
</section>
`}
          </CodePane>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Focus Styles">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            Visible focus indicators are crucial for keyboard users.
          </p-heading>
          <br />

          <p-text-list>
            <p-text-list-item>
              Focus indicators must have a minimum contrast ratio of{" "}
              <strong>3:1</strong> against adjacent colors
            </p-text-list-item>
            <p-text-list-item>
              Focus styling requirements
              <p-text-list>
                <p-text-list-item>
                  Focus areas should be at least <strong>2px thick</strong>
                </p-text-list-item>
                <p-text-list-item>
                  Focus styles should be visible in both{" "}
                  <strong>light and dark modes</strong>
                </p-text-list-item>
                <p-text-list-item>
                  Consider using <strong>multiple indicators</strong> (e.g.,
                  outline + background change)
                </p-text-list-item>
              </p-text-list>
            </p-text-list-item>
            <p-text-list-item>
              Animations can enhance focus visibility but{" "}
              <strong>shouldn't be distracting</strong>
            </p-text-list-item>
          </p-text-list>
        </Box>
      </p-tabs-item>
    </p-tabs>
  );
};

export default FocusHandling;
