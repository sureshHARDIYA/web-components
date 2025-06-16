import { Box, Image } from "spectacle";

import HTML from "./html.png";

const SemanticHTML = () => {
  return (
    <div className="">
      <p-tabs size="medium">
        <p-tabs-item label="Semantic HTML">
          <Box backgroundColor="primary" className="p-4">
            <Image src={HTML} />
          </Box>
        </p-tabs-item>
        <p-tabs-item label="Elements with semantic meaning">
          <div className="flex gap-6">
            <Box className="p-4 flex gap-6" backgroundColor="primary">
              <p-table caption="Semantic elements with no special functionality">
                <p-table-head>
                  <p-table-head-row>
                    <p-table-head-cell>Element</p-table-head-cell>
                    <p-table-head-cell>Semantic Meaning</p-table-head-cell>
                    <p-table-head-cell>Default Functionality</p-table-head-cell>
                  </p-table-head-row>
                </p-table-head>
                <p-table-body>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<section />"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      A thematically grouped block of content
                    </p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<article />"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      Self-contained content (e.g., blog post)
                    </p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<header />"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      Introductory content for a section or page
                    </p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<footer />"}</code>
                    </p-table-cell>
                    <p-table-cell>Footer for a section or page</p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<nav />"}</code>
                    </p-table-cell>
                    <p-table-cell>Group of navigational links</p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<aside />"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      Tangential content (e.g., sidebar, note)
                    </p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<main />"}</code>
                    </p-table-cell>
                    <p-table-cell>Main content area of the page</p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<time />"}</code>
                    </p-table-cell>
                    <p-table-cell>Represents a time or date</p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                </p-table-body>
              </p-table>
            </Box>

            <Box className="p-4 flex gap-6" backgroundColor="primary">
              <p-table caption="Semantic elements with no special functionality">
                <p-table-head>
                  <p-table-head-row>
                    <p-table-head-cell>Element</p-table-head-cell>
                    <p-table-head-cell>Semantic Meaning</p-table-head-cell>
                    <p-table-head-cell>Default Functionality</p-table-head-cell>
                  </p-table-head-row>
                </p-table-head>
                <p-table-body>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<figure />"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      Container for images, diagrams, etc.
                    </p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<figcaption />"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      Caption for <code>{"<figure />"}</code>
                    </p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<address />"}</code>
                    </p-table-cell>
                    <p-table-cell>Contact information</p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<mark />"}</code>
                    </p-table-cell>
                    <p-table-cell>Highlights text</p-table-cell>
                    <p-table-cell>Minor styling only</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<cite />"}</code>
                    </p-table-cell>
                    <p-table-cell>Title of a creative work</p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<dfn />"}</code>
                    </p-table-cell>
                    <p-table-cell>Marks a definition</p-table-cell>
                    <p-table-cell>None</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<abbr />"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      Abbreviation with optional tooltip
                    </p-table-cell>
                    <p-table-cell>
                      Tooltip on hover if <br /> <code>{"<title />"}</code> used
                    </p-table-cell>
                  </p-table-row>
                </p-table-body>
              </p-table>
            </Box>
          </div>
        </p-tabs-item>
        <p-tabs-item label="Elements with special functionality">
          <div className="flex gap-8">
            <Box backgroundColor="primary" className="p-4 flex gap-8">
              <p-table caption="Semantic elements with built-in functionality">
                <p-table-head>
                  <p-table-head-row>
                    <p-table-head-cell>Element</p-table-head-cell>
                    <p-table-head-cell>Semantic Meaning</p-table-head-cell>
                    <p-table-head-cell>
                      Built-in Functionality
                    </p-table-head-cell>
                  </p-table-head-row>
                </p-table-head>
                <p-table-body>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<a>"}</code>
                    </p-table-cell>
                    <p-table-cell>Hyperlink to another resource</p-table-cell>
                    <p-table-cell>Focusable, navigates on click</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<button>"}</code>
                    </p-table-cell>
                    <p-table-cell>Triggers an action</p-table-cell>
                    <p-table-cell>
                      Focusable, clickable
                      <br /> Submits form if inside <code>{"<form>"}</code>
                    </p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<input>"}</code>
                    </p-table-cell>
                    <p-table-cell>User input field</p-table-cell>
                    <p-table-cell>
                      Keyboard input, validation,
                      <br /> form submission
                    </p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<select>"}</code>
                    </p-table-cell>
                    <p-table-cell>Dropdown list</p-table-cell>
                    <p-table-cell>
                      Keyboard navigation,
                      <br /> native dropdown behavior
                    </p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<textarea>"}</code>
                    </p-table-cell>
                    <p-table-cell>Multi-line text input</p-table-cell>
                    <p-table-cell>
                      Typing, scrolling,
                      <br /> form submission
                    </p-table-cell>
                  </p-table-row>
                </p-table-body>
              </p-table>
            </Box>
            <Box backgroundColor="primary" className="p-4 flex gap-8">
              <p-table caption="Semantic elements with built-in functionality">
                <p-table-head>
                  <p-table-head-row>
                    <p-table-head-cell>Element</p-table-head-cell>
                    <p-table-head-cell>Semantic Meaning</p-table-head-cell>
                    <p-table-head-cell>
                      Built-in Functionality
                    </p-table-head-cell>
                  </p-table-head-row>
                </p-table-head>
                <p-table-body>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<label>"}</code>
                    </p-table-cell>
                    <p-table-cell>Label for a form control</p-table-cell>
                    <p-table-cell>
                      Clicking focuses
                      <br /> associated input
                    </p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<form>"}</code>
                    </p-table-cell>
                    <p-table-cell>Group of form controls</p-table-cell>
                    <p-table-cell>
                      Handles submission,
                      <br /> built-in validation
                    </p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<details>"}</code>
                    </p-table-cell>
                    <p-table-cell>Expandable/collapsible section</p-table-cell>
                    <p-table-cell>
                      Toggle open/close
                      <br /> on click
                    </p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<summary>"}</code>
                    </p-table-cell>
                    <p-table-cell>
                      Summary heading for <code>{"<details>"}</code>
                    </p-table-cell>
                    <p-table-cell>Acts as a toggle button</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>
                      <code>{"<table>"}</code>
                    </p-table-cell>
                    <p-table-cell>Tabular data</p-table-cell>
                    <p-table-cell>
                      Built-in layout,
                      <br /> semantic structure,
                      <br /> keyboard navigation
                    </p-table-cell>
                  </p-table-row>
                </p-table-body>
              </p-table>
            </Box>
          </div>
        </p-tabs-item>

        <p-tabs-item label="Landmarks">
          <Box backgroundColor="primary" className="p-4 flex flex-col gap-6">
            <p-table caption="Common HTML Landmark Elements">
              <p-table-head>
                <p-table-head-row>
                  <p-table-head-cell>Element</p-table-head-cell>
                  <p-table-head-cell>Purpose</p-table-head-cell>
                  <p-table-head-cell>ARIA Role</p-table-head-cell>
                  <p-table-head-cell>Multiple Allowed?</p-table-head-cell>
                </p-table-head-row>
              </p-table-head>
              <p-table-body>
                <p-table-row>
                  <p-table-cell>
                    <code>{"<main>"}</code>
                  </p-table-cell>
                  <p-table-cell>Main content of the page</p-table-cell>
                  <p-table-cell>
                    <code>main</code>
                  </p-table-cell>
                  <p-table-cell>Only one per page</p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>
                    <code>{"<header>"}</code>
                  </p-table-cell>
                  <p-table-cell>
                    Introductory content or navigation aid
                  </p-table-cell>
                  <p-table-cell>
                    <code>banner</code>
                  </p-table-cell>
                  <p-table-cell>Only one per page (at top level)</p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>
                    <code>{"<nav>"}</code>
                  </p-table-cell>
                  <p-table-cell>
                    Primary or secondary navigation links
                  </p-table-cell>
                  <p-table-cell>
                    <code>navigation</code>
                  </p-table-cell>
                  <p-table-cell>Yes</p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>
                    <code>{"<aside>"}</code>
                  </p-table-cell>
                  <p-table-cell>Complementary or side content</p-table-cell>
                  <p-table-cell>
                    <code>complementary</code>
                  </p-table-cell>
                  <p-table-cell>Yes</p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>
                    <code>{"<footer>"}</code>
                  </p-table-cell>
                  <p-table-cell>
                    Footer content (copyright, links, etc.)
                  </p-table-cell>
                  <p-table-cell>
                    <code>contentinfo</code>
                  </p-table-cell>
                  <p-table-cell>Only one per page (at top level)</p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>
                    <code>{'<form role="search">'}</code>
                  </p-table-cell>
                  <p-table-cell>Search functionality</p-table-cell>
                  <p-table-cell>
                    <code>search</code>
                  </p-table-cell>
                  <p-table-cell>Yes</p-table-cell>
                </p-table-row>
                <p-table-row>
                  <p-table-cell>
                    <code>{"<section>"}</code>
                  </p-table-cell>
                  <p-table-cell>Standalone themed content</p-table-cell>
                  <p-table-cell>
                    <code>region</code>
                  </p-table-cell>
                  <p-table-cell>Yes</p-table-cell>
                </p-table-row>
              </p-table-body>
            </p-table>
          </Box>
        </p-tabs-item>
      </p-tabs>
    </div>
  );
};

export default SemanticHTML;
