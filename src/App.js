import React from "react";
import { ThemeProvider } from "styled-components";
import AppWrapper from "./styled/AppWrapper";
import ScrollablePane from "./styled/ScrolalblePane";
import FrontPage from "./styled/FrontPage";
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
          <ScrollablePane>
            <FrontPage>
              <ThemeSwitchButton handleThemeToggle={this.handleThemeToggle} />
              <FloatingContent>
                <Header>Slava Bezgachev</Header>
                <Bio>
                  I am a full stack web developer, lately focusing on mastering
                  Javascript. I like working with NodeJS and ReactJS, check out
                  my GitHub page for some work I've done and check out my{" "}
                  <a href="">portfolio</a> where I take some in-depth looks
                  into some of my projects.
                </Bio>

                <Bio>
                  Best way to contact me is by email{" "}
                  <a href="mailto:slava@bezgachev.com">slava@bezgachev.com</a>
                </Bio>
                <LogoWrapper>
                  <LogoLink target="_blank" href="https://github.com/slavabez">
                    <GithubIcon />
                  </LogoLink>
                  <LogoLink
                    target="_blank"
                    href="https://medium.com/@bezgachev"
                  >
                    <MediumIcon />
                  </LogoLink>
                  <LogoLink
                    target="_blank"
                    href="https://stackoverflow.com/users/story/2237238"
                  >
                    <StackOverflowIcon />
                  </LogoLink>
                  <LogoLink target="_blank" href="https://twitter.com/slavabez">
                    <TwitterIcon />
                  </LogoLink>
                </LogoWrapper>
              </FloatingContent>
            </FrontPage>
          </ScrollablePane>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
