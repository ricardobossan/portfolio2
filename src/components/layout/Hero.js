import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Hidden from '@material-ui/core/Hidden';

/**
 * @todo choose better typografy for `heroMessage`.
 * @todo find out how to change the `ChevronTripleDown` color in `heroMessage`.
 */

const styles = theme => ({
  root: {
    height: '100%',
    position: 'relative'
  },
  img: {
    opacity: '0.5',
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
    top: '0',
    left: '0',
    zIndex: -1
  },
  heroMessage: {
    ...theme.mixins.gutters(),
    position: 'static',
    height: '100vh',
    paddingTop: '45vh',
    [theme.breakpoints.up('lg')]: { paddingTop: theme.spacing.unit * 21 },
    paddingLeft: theme.spacing.unit * 8,
    paddingRight: theme.spacing.unit * 8,
    background: '#ffffff00'
  },
  scrollDown: {
    textShadow: '0 0 3px #000, 0 0 5px #000',
    textAlign: 'center'
  },
  ChevronTripleDown: {
    color: '#fff'
  }
});

function Hero(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.heroMessage} elevation={0}>
        <Typography className={classes.scrollDown} variant="h4" component="h4">
          <Hidden lgUp>
            <span>Swipe </span>
          </Hidden>
          <Hidden mdDown>
            <span>Scroll </span>
          </Hidden>
          down for projects.
        </Typography>
      </Paper>
      <div>
        <img
          className={classes.img}
          style={{ width: '100%' }}
          src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=700&q=80"
          alt="A Person's back, contemplating the mountains on a sunny day"
        />
      </div>
    </div>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
