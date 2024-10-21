import { FlexBox, FullScreen, AnimatedProgress, Box, Image } from "spectacle";

import logo from "@/logo.svg";
import { trygTheme } from ".";

const template = () => (
  <>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      top={0}
      width={1}
    >
      <Box padding="0 1em"></Box>
      <Box padding="1em">
        <Image src={logo} className="App-logo" alt="logo" />
      </Box>
    </FlexBox>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen color={trygTheme.brand} />
      </Box>
      <Box padding="1em">
        <AnimatedProgress color={trygTheme.brand} />
      </Box>
    </FlexBox>
  </>
);

export default template;
