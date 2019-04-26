import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

/** @theme palette https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=2d5e72&secondary.color=0d3645 */
import theme from './theme';

import { Header, Hero, Footer, MyProjects } from './layout/';
import Portfolio from './Portfolio';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

console.log(theme);
const mainTheme = createMuiTheme(theme);
function App() {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Hero />
        <MyProjects />
        <Portfolio />
        <Footer />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
