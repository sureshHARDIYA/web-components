import { Appear, Heading, Image } from "spectacle";

import IMG from "./uu.gif";

const Principles = () => {
  return (
    <Appear priority={0}>
      <div className="flex justify-center w-full">
        <Heading fontSize="h3">Principles of Universal Design</Heading>
        <Image src={IMG} alt="Principles" className="flex" />
      </div>
    </Appear>
  );
};

export default Principles;
