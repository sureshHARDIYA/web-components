import { CodePane, Image } from "spectacle";

import LightHouse from "./lighthouse2.gif";
import Wave from "./wave.png";
import { customTheme } from "@/slides/7/customTheme";

const Tooling = () => {
  return (
    <div>
      <p-text-list>
        <p-text-list-item>DevTools</p-text-list-item>
        <p-text-list-item>CI/CD audits</p-text-list-item>
        <p-text-list-item>Linters</p-text-list-item>
      </p-text-list>
    </div>
  );
};

export const Tooling1 = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={LightHouse} height={500} />
    </div>
  );
};

export const Tooling2 = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src={Wave} height={500} />
    </div>
  );
};

export const Tooling3 = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2">
        <CodePane language="javascript" theme={customTheme}>
          {`axe
  .run()
  .then(results => {
    if (results.violations.length) {
      throw new Error('Accessibility issues found');
    }
  })
  .catch(err => {
    console.error('Something bad happened:', err.message);
  });`}
        </CodePane>
      </div>
    </div>
  );
};
export default Tooling;
