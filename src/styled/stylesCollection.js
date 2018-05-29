import { css } from "styled-components";

export const smoothBackground = css`
  background-image: linear-gradient(${props => props.theme.backgroundOne}, ${props => props.theme.backgroundTwo});
  box-shadow: inset 0 0 100px hsla(0, 0%, 0%, 0.3);
`;
