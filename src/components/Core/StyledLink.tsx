import styled from "styled-components";

const StyledLink = styled.a`
  color: #105b64;
  text-decoration: underline;

  &:hover {
    color: #0d3b3e;
    text-decoration: none;
  }

  &:active {
    color: #fff;
    text-decoration: none;
    box-shadow: 0 0 0 2px #105b64;
    background-color: #105b64;
    outline: 0;
  }
`;

export default StyledLink;
