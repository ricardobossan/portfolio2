import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { red, purple } from '@material-ui/core/colors';
/* import { HashRouter as Router, Route, Switch } from 'react-router-dom';
 */
import '../styles/styles.css';

import theme from './themes/theme';

import { Header, AsideNav, Hero, Footer, MyProjects } from './layout/';
import Contact from './Contact';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { swipeTop, swipeProjects, swipeContact } from '../actions';

import Hidden from '@material-ui/core/Hidden';

/** @theme palette https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=2d5e72&secondary.color=0d3645 */
const mainTheme = createMuiTheme(theme);
/* 
// Ensures handleScroll is also called if window is scrolled by controlling the window.scrollbars, or typing `up` or `down` on the keyboard
if (window.innerWidth >= 800) {
  window.addEventListener('scroll', () => console.log('lkdsfj'));
}
 */
function App(props) {
  /*   mainTheme.palette.background.paper = '000';
  mainTheme.palette.type = 'dark';
 */ console.log(
    mainTheme
  );
  const { viewSelect, swipeTop, swipeProjects, swipeContact } = props;
  const handleScroll = () => {
    const action =
      window.scrollY >= 0 &&
      window.scrollY <
        window.screen.availHeight - window.screen.availHeight * 0.7
        ? swipeTop
        : window.scrollY >=
          document.body.clientHeight -
            window.screen.availHeight -
            window.screen.availHeight * 0.7
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
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Hidden mdDown>
              <Grid
                style={{
                  height: '100vh'
                }}
                lg={2}
              >
                <AsideNav />
                {/*                 
                <aside style={{ height: '100vh' }}>
                  <ul
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <li>Top</li>
                    <li>Projects</li>
                    <li>Contact</li>
                  </ul>
                </aside>
 */}{' '}
              </Grid>
            </Hidden>
            <Grid lg={10}>
              <div>
                <Hero />
                <MyProjects />
                <Contact />
              </div>
            </Grid>
            {/*         <Router hashType="noslash">
            <Route>
              <Route exact path="/" component={Hero} />
              <Route path="/portfolio" component={MyProjects} />
              <Route path="/contact" component={Contact} />
            </Route>
          </Router>
  */}{' '}
          </div>
          <Hidden lgUp>
            <Footer />
          </Hidden>
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
