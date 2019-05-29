import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Link
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { viewTop, viewProjects, viewContact } from '../../actions';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  iconContainer: {
    justifyContent: 'flex-end'
  },
  iconButton: {
    margin: 0,
    color: '#FFF'
  },
  button: {
    margin: theme.spacing.unit
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  AppBar: {
    position: 'fixed'

    /*background:  '#00000090' */
    /*     background: '#0d3645'
     */
  }
});

function Header(props) {
  const handleViewSwitch = action => {
    // "Gambiarra", to call action and, at the same time, save one if it's returned values for scrolling to it, without using async logic.
    const actionReturnValues = action();
    // Side effect. Need applyMiddleware and react-thunk, to make the dispatch asyncronous, conditioning side effects to it
    window.scrollTo({
      left: 0,
      top: actionReturnValues.dispatch.screenY,
      behavior: 'smooth'
    });
  };

  const { classes, viewContact } = props;
  return (
    <header className={classes.root}>
      <AppBar className={classes.AppBar} color="secondary" position="static">
        <Toolbar>
          <Grid container direction="row">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              RB
            </Typography>
          </Grid>
          <Grid className={classes.iconContainer} container direction="row">
            <Grid xs={3} md={2} lg={1} item>
              <Link
                href="https://www.linkedin.com/in/ricardo-bossan"
                underline="none"
              >
                <IconButton
                  className={classes.iconButton}
                  aria-label="Linkedin"
                >
                  <i className="fab fa-linkedin-in" />
                </IconButton>
              </Link>
            </Grid>
            <Grid xs={3} md={2} lg={1} item>
              <Link href="https://github.com/ricardobossan" underline="none">
                <IconButton className={classes.iconButton} aria-label="GitHub">
                  <i className="fab fa-github" />
                </IconButton>
              </Link>
            </Grid>
            <Grid xs={3} md={2} lg={1} item>
              <Link href="https://twitter.com/BossanRicardo" underline="none">
                <IconButton className={classes.iconButton} aria-label="Twitter">
                  <i className="fab fa-twitter" />
                </IconButton>
              </Link>
            </Grid>
            <Grid xs={3} md={2} lg={1} item>
              <IconButton
                onClick={() => handleViewSwitch(viewContact)}
                className={classes.iconButton}
                aria-label="Mail"
                color="inherit"
              >
                <i className="fas fa-envelope" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  viewContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Header));
