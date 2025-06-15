import { Appear, Image } from "spectacle";

import SkipLinksImage from "./skip.gif";

export const SkipLinks1 = () => {
  return (
    <Image
      src={SkipLinksImage}
      width="100%"
      height={650}
      alt="Skip Links Example"
    />
  );
};

const SkipLinks2 = () => {
  return (
    <div>
      <Appear>
        <p-inline-notification
          heading="WCAG 2.2 – Success Criterion 2.4.1: Bypass Blocks"
          heading-tag="h2"
        >
          A mechanism is available to bypass blocks of content that are repeated
          on multiple Web pages.
          <br /> <br />
          <p-link-pure href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html">
            <span className="text-blue-500 mt-4">
              https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html
            </span>
          </p-link-pure>
        </p-inline-notification>
      </Appear>
      <br />
      <Appear>
        <p-inline-notification
          heading="WCAG 2.2 – Success Criterion 2.4.3: Focus Order"
          heading-tag="h2"
        >
          Ensures that skip links are logically reachable with Tab and appear
          early in the focus order.
          <br /> <br />
          <p-link-pure href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html">
            <span className="text-blue-500 mt-4">
              https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html
            </span>
          </p-link-pure>
        </p-inline-notification>
      </Appear>
      <br />
      <Appear>
        <p-inline-notification
          heading="WCAG 2.2 – Success Criterion 1.3.2: Meaningful Sequence"
          heading-tag="h2"
        >
          Supports using skip links to create a predictable and meaningful
          content flow.
          <br /> <br />
          <p-link-pure href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html">
            <span className="text-blue-500 mt-4">
              https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html
            </span>
          </p-link-pure>
        </p-inline-notification>
      </Appear>
    </div>
  );
};

export default SkipLinks2;
