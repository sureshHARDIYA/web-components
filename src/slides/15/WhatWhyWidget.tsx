import { Appear, Image } from "spectacle";
import srcImage from "./why_widget.png";
import whyMS from "./why_ms.png";

const WhatWhyWidget = () => {
  return (
    <div className="text-black grid grid-cols-2 gap-4 w-full">
      <div>
        <p>
          A <kbd>web application</kbd> is a self-contained, interactive
          component or interface element that performs a specific function or
          displays specific information.
        </p>{" "}
        <Appear priority={0} className="mt-6">
          <Image
            src={srcImage}
            alt="What/Why Widget"
            style={{ height: "400px" }}
          />
        </Appear>
      </div>
      <Appear priority={1}>
        <Image src={whyMS} alt="What/Why Widget" style={{ height: "400px" }} />
      </Appear>
      <Appear priority={2}>
        <p-link-pure href="https://minside-url-builder.netlify.app/">
          Yes, its in production.
        </p-link-pure>
      </Appear>
    </div>
  );
};

export default WhatWhyWidget;
