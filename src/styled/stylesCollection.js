import styled, { css } from "styled-components";

export const colours = [
  "#c7dfeb",
  "#fff6e4",
  "#403e3f",
  "#ffeef2",
  "#ffe4f3"
];

export const smoothBackground = css`
  background-image: linear-gradient(${colours[0]}, ${colours[1]});
  box-shadow: inset 0 0 100px hsla(0, 0%, 0%, 0.3);
`;
