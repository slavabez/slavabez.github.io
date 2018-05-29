import React from 'react';
import { ThemeProvider } from "styled-components";
import AppWrapper from "./styled/AppWrapper";
import FloatingContent from "./styled/FloatingContent";
import { Header } from "./styled/textCollection";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      theme: "bright"
    };
  }


  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper>
          <FloatingContent>
            <Header>Slava Bezgachev</Header>
          </FloatingContent>
        </AppWrapper>
      </ThemeProvider>

    );
  }
}

export default App;
