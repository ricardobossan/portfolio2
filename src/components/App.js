import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
/* import { HashRouter as Router, Route, Switch } from 'react-router-dom';
 */
import '../styles/styles.css';

import theme from './themes/theme';

import { Header, AsideNav, Hero, Footer, MyProjects } from './layout/';
import Contact from './Contact';

import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles';

import { swipeTop, swipeProjects, swipeContact } from '../actions';

import Hidden from '@material-ui/core/Hidden';

/** @theme palette https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=2d5e72&secondary.color=0d3645 */
const mainTheme = createMuiTheme(theme);

const styles = theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: 0
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

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

  const handleKey = e =>
    e.key === 'ArrowUp' ||
    e.key === 'ArrowDown' ||
    e.key === 'PageUp' ||
    e.key === 'PageDown' ||
    e.key === 'Home' ||
    e.key === 'End'
      ? handleScroll()
      : null;

  const handleKeyWrapper = e => {
    document.body.removeEventListener('keyup', handleKeyWrapper, false);
    handleKey(e);
  };

  useEffect(() => {
    document.body.addEventListener('keyup', handleKeyWrapper);
  });

  return (
    <div
      style={{ overflow: 'hidden' }}
      className="scroller"
      /*       onKeyDown={event => handleKey(event)}
       */ onTouchMove={handleScroll}
      onWheel={handleScroll}
      onScroll={handleScroll}
    >
      <MuiThemeProvider theme={mainTheme}>
        <React.Fragment>
          <CssBaseline />
          <Header />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
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
)(withStyles(styles)(App));
