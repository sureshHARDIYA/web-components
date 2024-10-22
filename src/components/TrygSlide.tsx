import styled from "styled-components";
import { Heading, Slide, Link } from "spectacle";

import { trygTheme } from "../theme";

export const TrygSlide = ({
  children,
  title,
  readMoreLink,
  hideBackground = false,
}: any) => {
  return (
    <Slide
      backgroundColor="white"
      {...(!hideBackground && {
        backgroundImage: "url(https://play.tailwindcss.com/img/beams.jpg)",
      })}
    >
      {title && (
        <Heading margin="0px" padding="3rem" fontSize="42px">
          {title}
          {readMoreLink && (
            <StyledLink href={readMoreLink}>[Read More...]</StyledLink>
          )}
        </Heading>
      )}
      {children}
    </Slide>
  );
};

const StyledLink = styled(Link)`
  color: ${trygTheme.brand};
  font-size: 14px;
  margin-left: 1rem;
`;
