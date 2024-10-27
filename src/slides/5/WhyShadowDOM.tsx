import { Appear } from "spectacle";

const WhyShadowDOM = () => {
  return (
    <div className="text-black text-xl">
      <Appear className="mt-4">
        <p-inline-notification
          heading="Declaratively with HTML [<span>my span</span>]"
          heading-tag="h3"
          state="success"
          className="w-full"
        ></p-inline-notification>
      </Appear>
      <Appear className="mt-4 w-full">
        <p-inline-notification
          heading="Encapsulation from CSS"
          heading-tag="h3"
          state="success"
          style={{ width: "100%" }}
        ></p-inline-notification>
        <iframe
          height="300"
          title="Shadow DOM CSS Encapsulation"
          src="https://codepen.io/sureshHARDIYA/embed/poMdBoq?default-tab=js%2Cresult&editable=true"
          loading="lazy"
          style={{ width: "100%" }}
        >
          <a href="https://codepen.io/sureshHARDIYA/pen/poMdBoq">
            Shadow DOM CSS Encapsulation
          </a>
          by Suresh KUMAR Mukhiya (
          <a href="https://codepen.io/sureshHARDIYA">@sureshHARDIYA</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </Appear>
      <Appear className="mt-8">
        <div className="mb-8">
          When Microsoft’s Edge browser team released WebUI 2.0 in May, a
          project that aimed to replace{" "}
          <kbd className="underline text-red-700">React components</kbd> with
          native
          <kbd className="ml-1 mr-1 underline text-red-700">web components</kbd>
          , its primary goal was to make{" "}
          <kbd className="underline text-red-700">Edge </kbd>faster for end
          users. The core idea was that adopting a “markup-first architecture”
          would reduce JavaScript reliance in its product, which would mean less
          code to process on the client side — hence a better experience for the
          user.
        </div>
      </Appear>
    </div>
  );
};

export default WhyShadowDOM;

// box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;
