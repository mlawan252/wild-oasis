import styled, { css } from "styled-components";

//const test = css`text-align:center;`
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4rem;
      font-weight: 600;
      
      
    `}
    ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      
      
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      
      
    `}
    padding: 1rem;
`;

export default Heading;
