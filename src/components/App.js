import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../styles/styles.css';

import theme from './themes/theme';

import { Header, Hero, Footer, MyProjects } from './layout/';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/** @theme palette https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=2d5e72&secondary.color=0d3645 */
const mainTheme = createMuiTheme(theme);
function App() {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Router hashType="noslash">
          <Route>
            <Route exact path="/" component={Hero} />
            <Route path="/portfolio" component={MyProjects} />
            <Route path="/contact" component={Contact} />
          </Route>
        </Router>
        <Footer />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
