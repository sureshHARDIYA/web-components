import { Box, CodePane } from "spectacle";

import { customTheme } from "@/slides/7/customTheme";

const SemanticWeb = () => {
  return (
    <div className="">
      <p-tabs size="medium">
        <p-tabs-item label="Semantic Web">
          <Box backgroundColor="primary" className="p-4">
            <p-text size="medium">
              The Semantic Web is an extension of the current web, enabling
              machines to understand and interpret the meaning of content.
            </p-text>

            <div className="mt-4">
              <p-heading tag="h4" size="small">
                Technologies Involved:
              </p-heading>
              <p-text-list>
                <p-text-list-item>
                  RDF (Resource Description Framework)
                </p-text-list-item>
                <p-text-list-item>OWL (Web Ontology Language)</p-text-list-item>
                <p-text-list-item>
                  SPARQL (query language for semantic data)
                </p-text-list-item>
              </p-text-list>
              <br />
              <CodePane language="json" theme={customTheme}>
                {`
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Suresh Kumar Mukhiya",
                "jobTitle": "Tryging hard to be a developer",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bergen",
                    "addressCountry": "Norway"
                }
                }
            `}
              </CodePane>
            </div>
          </Box>
        </p-tabs-item>
        <p-tabs-item label="Semantic HTML">
          <Box backgroundColor="primary" className="p-4">
            <p-text size="medium">
              Semantic HTML uses elements that clearly describe their meaning in
              human and machine-readable ways.
            </p-text>
            <br />
            <p-heading tag="h4" size="small">
              Benefits
            </p-heading>
            <p-text-list>
              <p-text-list-item>Improves SEO</p-text-list-item>
              <p-text-list-item>Enhances accessibility</p-text-list-item>
              <p-text-list-item>
                Easier for developers to read and maintain
              </p-text-list-item>
            </p-text-list>
            <br />
            <CodePane language="html" theme={customTheme}>
              {`
                <!-- Non-semantic -->
                <div id="header">Welcome</div>

                <!-- Semantic -->
                <header>Welcome</header>

                <!-- Non-semantic -->
                <div id="nav">...</div>

                <!-- Semantic -->
                <nav>...</nav>
            `}
            </CodePane>
          </Box>
        </p-tabs-item>
        <p-tabs-item label="Accessibility & Semantic HTML">
          <Box backgroundColor="primary" className="p-4">
            <p-heading tag="h4" size="small">
              Why it matters?
            </p-heading>
            <p-text size="medium">
              Semantic HTML helps screen readers and other assistive
              technologies understand and navigate web content more effectively.
            </p-text>
            <br />
            <CodePane language="html" theme={customTheme}>
              {`
                <!-- Not accessible -->
                <div onclick="openMenu()">Menu</div>

                <!-- Accessible -->
                <button onclick="openMenu()">Menu</button>
            `}
            </CodePane>
          </Box>
        </p-tabs-item>
        <p-tabs-item label="Summary">
          <div className="flex w-full items-center mb-4">
            <Box backgroundColor="primary" className="p-4">
              <p-table caption="Some caption">
                <p-table-head>
                  <p-table-head-row>
                    <p-table-head-cell>Concept</p-table-head-cell>
                    <p-table-head-cell>Helps Humans </p-table-head-cell>
                    <p-table-head-cell>Helps Machines </p-table-head-cell>
                    <p-table-head-cell>Helps Screen Readers</p-table-head-cell>
                  </p-table-head-row>
                </p-table-head>
                <p-table-body>
                  <p-table-row>
                    <p-table-cell>Semantic Web </p-table-cell>
                    <p-table-cell>❌ </p-table-cell>
                    <p-table-cell>✅</p-table-cell>
                    <p-table-cell>✅ (via structured data)</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>Semantic HTML </p-table-cell>
                    <p-table-cell>✅</p-table-cell>
                    <p-table-cell>✅</p-table-cell>
                    <p-table-cell>✅</p-table-cell>
                  </p-table-row>
                  <p-table-row>
                    <p-table-cell>Accessibility</p-table-cell>
                    <p-table-cell>✅</p-table-cell>
                    <p-table-cell>✅ (assistive tech)</p-table-cell>
                    <p-table-cell>✅</p-table-cell>
                  </p-table-row>
                </p-table-body>
              </p-table>
            </Box>
          </div>
        </p-tabs-item>
      </p-tabs>
    </div>
  );
};

export default SemanticWeb;
