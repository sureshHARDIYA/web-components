import { Box, Image } from "spectacle";

import Tobi from "./Tobii.gif";
import MouthStick from "./ms.jpg";
import Screens from "./screen.gif";
import Keyboard from "./keyboard.gif";

const ScreenReader = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Box
        backgroundColor="tertiary"
        className="flex justify-center  items-center text-black flex-col"
      >
        <Image src={Keyboard} className="px-4" />
        <p className="text-white text-2xl mt-5">Keyboard</p>
      </Box>
      <Box
        backgroundColor="tertiary"
        className="flex justify-center  items-center text-black"
      >
        <Image src={MouthStick} height={400} className="p-4" />
        <p className="text-white text-2xl ml-5">Mouth Stick</p>
      </Box>
    </div>
  );
};

export const ScreenReader2 = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Box
        backgroundColor="tertiary"
        className="flex justify-center  items-center mt-6 flex-col"
      >
        <Image src={Screens} height="300" />
        <p className="text-white text-2xl mt-5">Screen Readers</p>
      </Box>
      <Box
        backgroundColor="tertiary"
        className="flex justify-center  items-center mt-6 flex-col"
      >
        <Image src={Tobi} height="300" className="p-4" />
        <p className="text-white text-2xl my-5 ">Eye tracker keyboard</p>
      </Box>
    </div>
  );
};

export default ScreenReader;
