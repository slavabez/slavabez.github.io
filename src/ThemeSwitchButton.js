import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const ThemeSwitchButton = (props) => <Button onClick={() => {props.handleThemeToggle()}}>Change theme</Button>;

export default ThemeSwitchButton;