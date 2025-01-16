import { Appear, Heading, Quote } from "spectacle";

const WhatIsDesignSystem = () => {
  return (
    <div>
      <Heading>
        What is Design <s>System</s>?
      </Heading>
      <Appear>
        <Quote color="#222222">
          At its core, a design system is a{" "}
          <u>set of building blocks and standards</u> that help keep the look
          and feel of products and experiences consistent.
        </Quote>
      </Appear>
    </div>
  );
};

export default WhatIsDesignSystem;
