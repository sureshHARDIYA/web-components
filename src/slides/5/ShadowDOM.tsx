import { Appear, Image } from "spectacle";

import shadow from "./shadow.gif";

const ShadowDOM = () => {
  return (
    <div className="flex gap-4">
      <Image
        src={shadow}
        layout={{
          minWidth: "100%",
          height: "100%",
        }}
        className="w-1/2 h-[350px]"
      />
      <Appear className="w-1/2">
        <Image src="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM/shadowdom.svg" />
      </Appear>
    </div>
  );
};

export default ShadowDOM;
