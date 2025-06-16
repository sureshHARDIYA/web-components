import { Box, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { useRef } from "react";

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

// Focus trap logic
const trapFocus = (container: HTMLElement) => {
  const selectors = [
    "a[href]",
    "area[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
    "p-button",
  ];

  const shadowedContainer = container.shadowRoot?.querySelectorAll<HTMLElement>(
    selectors.join(",")
  );

  let focusable = Array.from(
    container.querySelectorAll<HTMLElement>(selectors.join(","))
  );

  if (shadowedContainer?.length) {
    shadowedContainer[0].focus();
    focusable = [shadowedContainer[0], ...focusable];
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  };

  container.addEventListener("keydown", handleKeyDown);
  return () => container.removeEventListener("keydown", handleKeyDown);
};

const Tabbable = () => {
  const modalTrapRef = useRef<HTMLElement | null>(null);
  const trapCleanupRef = useRef<(() => void) | null>(null);

  const handleModalClick = (id: string) => {
    const pModal = document.getElementById(id);

    if (pModal) {
      (pModal as any).open = true;

      pModal.addEventListener("dismiss", () => {
        (pModal as any).open = false;

        if (trapCleanupRef.current) {
          trapCleanupRef.current();
          trapCleanupRef.current = null;
        }
      });

      if (id === "modal-trap" && modalTrapRef.current) {
        // Focus and trap for modal with trap
        setTimeout(() => {
          modalTrapRef.current?.querySelector("input")?.focus();
        }, 0);

        // CLEANUP OLD TRAP FIRST
        if (trapCleanupRef.current) {
          trapCleanupRef.current();
          trapCleanupRef.current = null;
        }
        trapCleanupRef.current = trapFocus(modalTrapRef.current);
      }
    }
  };

  const handleClose = () => {
    const pModal = document.getElementById("modal-trap");
    if (pModal) {
      // ✅ Use proper property & attribute cleanup
      pModal.removeAttribute("open");

      if (trapCleanupRef.current) {
        trapCleanupRef.current();
        trapCleanupRef.current = null;
      }
    }
  };

  return (
    <p-tabs size="medium">
      <p-tabs-item label="Tab Navigation">
        <p-heading size="medium">
          You can use the tab key to navigate to the next tabbable item and
          shift + tab to navigate to the previous item.
        </p-heading>
      </p-tabs-item>

      <p-tabs-item label="Tabbable elements">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            <code>{"<a>"}</code>, <code>{"<button>"}</code>,{" "}
            <code>{"<input>"}</code>, <code>{"<select>"}</code>,{" "}
            <code>{"<textarea>"}</code>, and <code>{"<iframe>"}</code>
          </p-heading>
          <br />
          <CodePane language="tsx" theme={customTheme}>
            {` import isFocussable from '@tryg/utils'; `}
          </CodePane>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Making an element tabbable">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="medium">
            You can add the <code>tabindex</code> attribute to any element like
            this:
          </p-heading>
          <br />
          <CodePane language="tsx" theme={customTheme}>
            {`<div tabindex="0">I am focussable</div>`}
          </CodePane>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Active Element">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="small">
            Sometimes, especially on single page applications, it's helpful to
            store the currently focused element before a page transition so you
            can return to it later
          </p-heading>
          <br />
          <CodePane language="tsx" theme={customTheme}>
            {`const activeElement = document.activeElement;\nactiveElement?.focus();`}
          </CodePane>
        </Box>
      </p-tabs-item>

      <p-tabs-item label="Tab trapping">
        <Box backgroundColor="primary" className="p-4">
          <p-heading size="small">
            Another useful concept is tab trapping. Consider opening a modal on
            a page which contains a form. A keyboard only user will want to tab
            around the form but unless we help, tabbing while focused on the
            last form element will send us all the way back to the main
            document.
          </p-heading>
          <br />
          <p-text size="small">
            📜 Official Guidelines Say: <br />
            📌 WAI-ARIA Authoring Practices (WAI-ARIA 1.2):
            <br />
            "Keyboard focus should be trapped within a modal dialog while it is
            open."
          </p-text>
          <br />
          <p-link-pure href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">
            <span className="text-blue-500 mt-4 hover:underline">
              Source: W3C Modal Dialog Pattern
            </span>
          </p-link-pure>
          <br />
          <br />
          <br />
          <p-link
            href="https://learn-a11y.netlify.app/tab-trapping"
            target="_blank"
          >
            No tab trapping
          </p-link>
          &nbsp;&nbsp;
          <p-button
            type="button"
            aria="{'aria-haspopup': 'dialog'}"
            onClick={() => handleModalClick("modal-trap")}
            id="modal-trap-button"
          >
            Tab trapping
          </p-button>
          {/* Modal 2: With tab trap */}
          <p-modal
            id="modal-trap"
            ref={modalTrapRef}
            aria="{'aria-label': 'Trap Modal'}"
          >
            <p-heading slot="header" size="large" tag="h2">
              Update Profile (Tab Trapped)
            </p-heading>
            <p-fieldset label="Enter your email address">
              <p-text-field-wrapper label="You need to verify your email address. Please enter a valid email address.">
                <input type="email" name="email" />
              </p-text-field-wrapper>
            </p-fieldset>
            <br />
            <p-fieldset label="Enter your address">
              <p-text-field-wrapper label="Valid address">
                <input type="text" name="address" />
              </p-text-field-wrapper>
            </p-fieldset>
            <br />
            <p-fieldset label="Phone number">
              <p-text-field-wrapper label="Enter a valid phone number. You will receive a verification code.">
                <input type="text" name="phone" />
              </p-text-field-wrapper>
            </p-fieldset>
            <p-button-group slot="footer">
              <p-button type="button">Update information</p-button>
              <p-button type="button" variant="secondary" onClick={handleClose}>
                Cancel
              </p-button>
            </p-button-group>
          </p-modal>
        </Box>
      </p-tabs-item>
    </p-tabs>
  );
};

export default Tabbable;
