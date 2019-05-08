import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
/* import Button from '@material-ui/core/Button'; */
import IconButton from '@material-ui/core/IconButton';
/* import MenuIcon from '@material-ui/icons/Menu'; */

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
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
    /*background:  '#00000090' */
    background: '#0d3645'
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <Grid container direction="row">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              RB
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid xs={3} item>
              <IconButton
                className={classes.iconButton}
                aria-label="Linkedin"
                color="inherit"
              >
                <i className="fab fa-linkedin-in" />
              </IconButton>
            </Grid>
            <Grid xs={3} item>
              <IconButton
                className={classes.iconButton}
                aria-label="GitHub"
                color="inherit"
              >
                <i className="fab fa-github" />
              </IconButton>
            </Grid>
            <Grid xs={3} item>
              <IconButton
                className={classes.iconButton}
                aria-label="Twitter"
                color="inherit"
              >
                <i className="fab fa-twitter" />
              </IconButton>
            </Grid>
            <Grid xs={3} item>
              <IconButton
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

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ButtonAppBar);
