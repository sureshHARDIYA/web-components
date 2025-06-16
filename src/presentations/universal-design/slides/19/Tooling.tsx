import { CodePane, Image } from "spectacle";

import LightHouse from "./lighthouse2.gif";
import Wave from "./wave.png";
import { customTheme } from "@/slides/7/customTheme";
import DQUE from "./deque.png";

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
      <div className="grid grid-cols-2 gap-6">
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

        <div>
          <Image src={DQUE} height={400} />
        </div>
      </div>
    </div>
  );
};

export const Tooling4 = () => {
  return (
    <div>
      <p-heading size="medium">Linters</p-heading>
      <br />
      <p-text-list>
        <p-text-list-item>
          <p-link-pure href="https://www.npmjs.com/package/eslint-plugin-jsx-a11y">
            eslint-plugin-jsx-a11y
          </p-link-pure>
        </p-text-list-item>
        <p-text-list-item>
          <p-link-pure href="https://github.com/mgechev/codelyzer">
            codelyzer
          </p-link-pure>
        </p-text-list-item>
        <p-text-list-item>
          <p-link-pure href="https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility">
            eslint-plugin-vuejs-accessibility
          </p-link-pure>
        </p-text-list-item>
      </p-text-list>

      <br />
      <br />

      <p-heading size="medium">Accessible Design Systems</p-heading>
      <br />
      <p-text-list>
        <p-text-list-item>
          <p-link-pure href="https://react-spectrum.adobe.com/react-spectrum/index.html">
            Adobe's React Spectrum
          </p-link-pure>
        </p-text-list-item>
        <p-text-list-item>
          <p-link-pure href="https://m3.material.io/">
            Google's Material Design
          </p-link-pure>
        </p-text-list-item>
      </p-text-list>
    </div>
  );
};
export default Tooling;
