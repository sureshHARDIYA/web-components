import { Appear, Image, Quote } from "spectacle";

import IMG from "./uu.png";

const UniversalDesign = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div>
        <Appear priority={0}>
          <Quote color="black" fontSize="20px">
            <span className="font-bold underline">Universal design</span> is the
            design of buildings, <kbd>products</kbd> or environments to make
            them accessible to people, regardless of age, disability, or other
            factors.
          </Quote>
        </Appear>

        <Appear priority={1}>
          <Quote color="black" fontSize="20px">
            <span className="font-bold underline">Accessibility</span> is the
            design of <kbd>products</kbd>, devices, services, vehicles, or
            environments so as to be usable by disabled people.
          </Quote>
        </Appear>

        <Appear priority={3}>
          <Quote color="green" fontSize="20px" className="text-red-900">
            Universal design is broad and inclusive, while accessibility is
            targeted and specific{" "}
            <span className="font-bold underline">
              (for people with disability).
            </span>
          </Quote>
        </Appear>
      </div>
      <Appear priority={2}>
        <Image src={IMG} height="400" />
      </Appear>
    </div>
  );
};

export default UniversalDesign;
