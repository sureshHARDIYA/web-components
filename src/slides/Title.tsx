import { FlexBox, Heading } from "spectacle";

import { trygTheme } from "../theme";

const Title = () => {
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
          <s>Overrated</s> web components with <kbd>StencilJS</kbd>
        </Heading>
        <Heading margin="50px 0 0 0" color={trygTheme.grey40} fontSize="35px">
          Widgets, Components - best practices and lesson learned
        </Heading>
        <Heading margin="0px" color={trygTheme.grey40} fontSize="25px">
          <kbd>
            Suresh Kumar Mukhiya{" "}
            <a href="mailto:suresh.mukhiya@tryg.no">suresh.mukhiya@tryg.no</a>
          </kbd>
        </Heading>
      </FlexBox>
    </>
  );
};

export default Title;
