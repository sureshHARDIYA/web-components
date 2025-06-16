import { Box, Image, Appear } from "spectacle";

import Effect from "./ceffect.jpg";

const CurbCutEffect = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Appear priority={0}>
        <Box
          backgroundColor="primary"
          className="flex justify-center  items-center text-black flex-col"
        >
          <Image src={Effect} />
        </Box>
      </Appear>
      <Appear priority={0}>
        <Box
          backgroundColor="transparent"
          className="flex justify-center  items-left text-black flex-col"
        >
          <p className="text-2xl ml-5">
            The curb cut effect refers to the idea that designs or features
            originally created to help people with disabilities end up
            benefiting a much wider audience.
          </p>

          <Appear priority={1}>
            <div className="px-6 mt-6">
              <p-text-list>
                <p-text-list-item className="text-white">
                  <span className="font-bold underline mr-2 py-4">
                    Video captions:
                  </span>
                  Helpful in noisy places or for non-native speakers
                </p-text-list-item>
                <p-text-list-item>
                  <span className="font-bold underline mr-2 py-4">
                    Keyboard navigation :
                  </span>
                  Power users or people with repetitive strain injuries
                </p-text-list-item>
                <p-text-list-item>
                  <span className="font-bold underline mr-2 py-4">
                    High contrast mode :
                  </span>
                  Helps in bright sunlight or for aging eyes
                </p-text-list-item>
                <p-text-list-item>
                  <span className="font-bold underline mr-2 py-4">
                    Text-to-speech :
                  </span>
                  Useful for learning, multitasking, or visual impairments
                </p-text-list-item>
              </p-text-list>
            </div>
          </Appear>
        </Box>
      </Appear>
    </div>
  );
};

export default CurbCutEffect;
