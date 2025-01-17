import { Heading, Image, Quote, Grid, Box, Appear } from "spectacle";

import DS from "./design_sytem.gif";

const WhatIsDesignSystem = () => {
  return (
    <div>
      <Heading>What is Design System?</Heading>
      <Appear>
        <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Quote color="#222222" fontSize="36px">
              At its core, a design system is a{" "}
              <u>set of building blocks and standards</u> that help keep the
              look and feel of products and experiences consistent.
            </Quote>
          </Box>
          <Box backgroundColor="secondary">
            <Image src={DS} height="50" />
          </Box>
        </Grid>
      </Appear>
    </div>
  );
};

export default WhatIsDesignSystem;
