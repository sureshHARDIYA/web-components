const ConformanceLevel = () => {
  return (
    <div>
      <p-tabs>
        <p-tabs-item label="Standards and Guidelines">
          <p-text-list>
            <p-text-list-item>
              Web Content Accessibility Guidelines (WCAG).
            </p-text-list-item>
            <p-text-list-item>
              The official standard, published by WAI.
              <p-popover>
                The W3C Web Accessibility Initiative (WAI
                (https://www.w3.org/WAI/))
              </p-popover>
            </p-text-list-item>
            <p-text-list-item>
              <p-link-pure href=" https://www.w3.org/WAI/standards-guidelines/wcag/">
                https://www.w3.org/WAI/standards-guidelines/wcag/
              </p-link-pure>
            </p-text-list-item>
          </p-text-list>
        </p-tabs-item>
        <p-tabs-item label="Confermance Levels">
          <p-text>
            <p-link-pure href="https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels">
              https://www.w3.org/WAI/WCAG21/Understanding/conformance#levels
            </p-link-pure>
            <br />
            <br />
            <p-inline-notification
              heading="A (lowest)"
              heading-tag="h2"
              className="mt-4"
            ></p-inline-notification>
            <br />
            <p-inline-notification
              heading="AA (mid range)"
              heading-tag="h2"
              className="mt-4"
            ></p-inline-notification>
            <br />
            <p-inline-notification
              heading="and AAA (highest)"
              heading-tag="h2"
              className="mt-4"
            ></p-inline-notification>
          </p-text>
        </p-tabs-item>
      </p-tabs>
    </div>
  );
};

export default ConformanceLevel;
