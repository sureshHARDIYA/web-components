import { FlexBox, Heading } from "spectacle";

import { trygTheme } from "@/theme";
import StyledLink from "@/components/Core/StyledLink";

const DESTitle = () => {
  return (
    <>
      <FlexBox
        height="100%"
        flexDirection="column"
        backgroundColor={trygTheme.grey0}
      >
        <Heading
          margin="0px"
          padding="3rem"
          fontSize="h2"
          backgroundColor={trygTheme.brand}
          color="white"
        >
          Design System Echosystem
        </Heading>
        <Heading margin="50px 0 0 0" color={trygTheme.grey40} fontSize="35px">
          Nordic Design System
        </Heading>
        <Heading margin="0px" color={trygTheme.grey40} fontSize="25px">
          <kbd>
            Suresh Kumar Mukhiya (<s>Kjøpe Team</s> <em>Platform Team</em>){" "}
            <br />
            <StyledLink href="mailto:suresh.mukhiya@tryg.no">
              suresh.mukhiya@tryg.no
            </StyledLink>
          </kbd>
        </Heading>
      </FlexBox>
    </>
  );
};

export default DESTitle;
