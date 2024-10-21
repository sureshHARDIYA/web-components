import { useState } from "react";
import { Tree } from "react-arborist";
import { CodePane, SlideLayout } from "spectacle";

import code from "./trygno-input.tsx?raw";
import codeTheme from "@/slides/codeTheme";

const data = [
  {
    id: "a1",
    name: "trygno-ui",
    children: [
      {
        id: "b1",
        name: "packages",
        children: [
          {
            id: "b11",
            name: "react-library*",
            children: [
              {
                id: "b111",
                name: "package.json",
              },
            ],
          },
          {
            id: "b12",
            name: "vue-library*",
            children: [
              {
                id: "b121",
                name: "package.json",
              },
            ],
          },
          {
            id: "b13",
            name: "stencil-library",
            children: [
              { id: "b131", name: "src" },
              { id: "b132", name: "dist" },
              { id: "b133", name: "assets" },
              {
                id: "b134",
                name: "components",

                children: [
                  {
                    id: "b1341",
                    name: "tryg-button",
                    children: [
                      { id: "b13411", name: "tryg-button.tsx" },
                      { id: "b13412", name: "tryg-button.scss" },
                    ],
                  },
                  {
                    id: "b1342",
                    name: "tryg-input",
                    children: [
                      { id: "b13421", name: "tryg-input.tsx" },
                      { id: "b13422", name: "tryg-input.scss" },
                    ],
                  },
                  {
                    id: "b1343",
                    name: "tryg-checkbox",

                    children: [
                      { id: "b13431", name: "tryg-checkbox.tsx" },
                      { id: "b13432", name: "tryg-checkbox.scss" },
                    ],
                  },
                ],
              },
              { id: "b135", name: "styles" },
              { id: "b136", name: "index.html" },
              { id: "b137", name: "package.json" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "a2",
    name: "package.json",
  },
];

function Node({ node, style, dragHandle, setShowCode }: any) {
  /* This node instance can do many things. See the API reference. */
  const handleClick = () => {
    if (node.data.name === "tryg-input.tsx") {
      setShowCode(true); // Set showCode to true if the clicked node is 'tryg-input' or 'tryg-input.tsx'
    }
    node.toggle(); // Toggle the node's expand/collapse state
  };

  return (
    <div style={style} ref={dragHandle} onClick={handleClick}>
      {node.isLeaf ? "📄 " : "📁 "} {node.data.name}
    </div>
  );
}

const RightSide = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <div className="w-full text-black flex justify-left text-md">
      <div
        style={{
          height: "700px", // Set the height to control the vertical space
          overflow: "auto", // Enable scrolling if content overflows
          border: "1px solid #ddd", // Optional: Add a border for clarity
          padding: "10px",
        }}
      >
        <CodePane
          language="javascript"
          showLineNumbers
          theme={codeTheme as any}
        >
          {code}
        </CodePane>
      </div>
    </div>
  );
};

const ProjectStructureExample = () => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div id="treeWrapper" className="w-full h-screen bg-gray-50 p-4">
      <SlideLayout.TwoColumn
        backgroundColor="white"
        backgroundImage="url(https://play.tailwindcss.com/img/beams.jpg)"
        left={
          <Tree
            data={data}
            openByDefault={false}
            overscanCount={1}
            rowHeight={36}
            width={350}
            className="text-black text-md"
          >
            {(nodeProps) => <Node {...nodeProps} setShowCode={setShowCode} />}
          </Tree>
        }
        right={<RightSide show={showCode} />}
      ></SlideLayout.TwoColumn>
    </div>
  );
};

export default ProjectStructureExample;
