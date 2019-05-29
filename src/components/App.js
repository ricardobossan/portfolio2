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

function App(props) {
  const { swipeTop, swipeProjects, swipeContact } = props;
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
    action();
  };

  const handleKey = (e /*  console.log('event is firing.', e.key); */) =>
    e.key === 'ArrowUp' ||
    e.key === 'ArrowDown' ||
    e.key === 'PageUp' ||
    e.key === 'PageDown' ||
    e.key === 'Home' ||
    e.key === 'End'
      ? handleScroll()
      : null;

  return (
    <div
      autoFocus="true"
      style={{ overflow: 'hidden' }}
      className="scroller"
      onKeyDown={event => handleKey(event)}
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
              </Grid>
            </Hidden>
            <Grid lg={10}>
              <div>
                <Hero />
                <MyProjects />
                <Contact />
              </div>
            </Grid>
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
