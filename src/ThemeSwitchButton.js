import React from "react";
import styled from "styled-components";
import { ColourPalette } from "./svgs";

const Button = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border: none;
  background: none;
  border-radius: 0.5rem;
  padding: 0.5rem;

  color: ${props => props.theme.text};
  fill: ${props => props.theme.text};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThemeSwitchButton = props => (
  <Button
    onClick={() => {
      props.handleThemeToggle();
    }}
  >
    <ColourPalette />
    Swap theme
  </Button>
);

export default ThemeSwitchButton;
