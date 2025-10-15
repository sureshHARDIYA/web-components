import { FlexBox, Heading } from "spectacle";

import { trygTheme } from "@/theme";
import StyledLink from "@/components/Core/StyledLink";

const Summary = () => {
  return (
    <>
      <FlexBox
        height="100%"
        flexDirection="column"
        backgroundColor={trygTheme.grey0}
      >
        <Heading margin="0px" color={trygTheme.grey40} fontSize="25px">
          <kbd>
            Suresh Kumar Mukhiya <br />
            <StyledLink href="mailto:suresh.mukhiya@tryg.no">
              itsmeskm99@gmail.com
            </StyledLink>
          </kbd>
          <br />
          <StyledLink href="mailto:suresh.mukhiya@tryg.no">
            https://www.skmukhiya.com.np/
          </StyledLink>
        </Heading>

        <p-link-pure href="/universal-design-checklist?exportMode=true">
          Download as PDF
        </p-link-pure>
      </FlexBox>
    </>
  );
};

export default Summary;
