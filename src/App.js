import React from "react";
import { ThemeProvider } from "styled-components";
import AppWrapper from "./styled/AppWrapper";
import FloatingContent from "./styled/FloatingContent";
import { Header, Bio, LogoLink, LogoWrapper } from "./styled/textCollection";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { GithubIcon, MediumIcon, StackOverflowIcon, TwitterIcon } from "./svgs";

import bright from "./themes/bright";
import dark from "./themes/dark";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: bright
    };
  }

  handleThemeToggle = () => {
    // Sets the theme to the other based on previous state
    this.setState(oldState => ({
      theme: oldState.theme.name === "bright" ? dark : bright
    }));
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>
          <ThemeSwitchButton handleThemeToggle={this.handleThemeToggle} />
          <FloatingContent>
            <Header>Slava Bezgachev</Header>
            <Bio>Web developer bla bla</Bio>
            <LogoWrapper>
              <LogoLink target="_blank" href="">
                <GithubIcon />
              </LogoLink>
              <LogoLink target="_blank" href="">
                <MediumIcon/>
              </LogoLink>
              <LogoLink target="_blank" href="">
                <StackOverflowIcon />
              </LogoLink>
              <LogoLink target="_blank" href="">
                <TwitterIcon />
              </LogoLink>
            </LogoWrapper>
          </FloatingContent>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
