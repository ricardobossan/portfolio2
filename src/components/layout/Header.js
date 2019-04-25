import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

/**
 * @todo make the Header `background` style change to `#75c9d2`, when it's `top.value > 100%`
 *
 * Attempt:
 *
 *  ```
 *  if (this.style.top >= '100px') {
 *    this.setAttribute('style', 'background:#75c9d2');
 *  }
 *  ```
 *
 *
 */

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh'
  },
  grow: {
    flexGrow: 1
  },
  iconButton: {
    margin: 0
  },
  button: {
    margin: theme.spacing.unit
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  AppBar: {
    position: 'fixed',
    background: '#00000050'
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <Grid direction="row">
            <Button
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </Button>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Ricardo Bossan
            </Typography>
          </Grid>
          <Grid container xs="9" direction="row">
            <Grid item>
              <IconButton
                className={classes.button}
                aria-label="Linkedin"
                color="inherit"
              >
                <i className="fab fa-linkedin-in" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.button}
                aria-label="Twitter"
                color="inherit"
              >
                <i className="fab fa-twitter" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.button}
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

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ButtonAppBar);
