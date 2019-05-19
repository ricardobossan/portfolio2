import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
/* import { HashRouter as Router, Route, Switch } from 'react-router-dom';
 */
import '../styles/styles.css';

import theme from './themes/theme';

import { Header, Hero, Footer, MyProjects } from './layout/';
import Contact from './Contact';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { swipeTop, swipeProjects, swipeContact } from '../actions';

/** @theme palette https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=2d5e72&secondary.color=0d3645 */
const mainTheme = createMuiTheme(theme);

/* 
// Ensures handleScroll is also called if window is scrolled by controlling the window.scrollbars, or typing `up` or `down` on the keyboard
if (window.innerWidth >= 800) {
  window.addEventListener('scroll', () => console.log('lkdsfj'));
}
 */
function App(props) {
  const { viewSelect, swipeTop, swipeProjects, swipeContact } = props;
  const handleScroll = () => {
    const action =
      window.scrollY >= 0 &&
      window.scrollY <
        window.screen.availHeight - window.screen.availHeight * 0.2
        ? swipeTop
        : window.scrollY >=
          document.body.clientHeight - window.screen.availHeight - 1
        ? swipeContact
        : swipeProjects;

    /*       window.pageYOffset >= 0 &&
      window.pageYOffset <
        window.screen.availHeight - window.screen.availHeight / 8
        ? swipeTop
        : swipeProjects;
 */
    action();
  };

  /*   setInterval(() => {
    if (
      window.pageYOffset <
      window.screen.availHeight - window.screen.availHeight / 8
    ) {
      return swipeTop();
    } else if (
      window.pageYOffset >
      window.screen.availHeight - window.screen.availHeight / 8
    ) {
      return swipeContact();
    }
  }, 1000);
 */

  return (
    <div
      className="scroller"
      onTouchMove={handleScroll}
      onWheel={handleScroll}
      onScroll={handleScroll}
    >
      <MuiThemeProvider theme={mainTheme}>
        <React.Fragment>
          <CssBaseline />
          <Header />
          <Hero />
          <MyProjects />
          <Contact />
          {/*         <Router hashType="noslash">
            <Route>
              <Route exact path="/" component={Hero} />
              <Route path="/portfolio" component={MyProjects} />
              <Route path="/contact" component={Contact} />
            </Route>
          </Router>
  */}{' '}
          <Footer />
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  swipeTop,
  swipeProjects,
  swipeContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
