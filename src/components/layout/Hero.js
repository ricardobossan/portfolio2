import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChevronTripleDown from '@material-ui/icons/ArrowDownward';

/**
 * @todo choose better typografy for `heroMessage`.
 * @todo find out how to change the `ChevronTripleDown` color in `heroMessage`.
 */

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  img: {
    opacity: '0.9',
    position: 'absolute',
    width: '140%',
    height: '140%',
    objectFit: 'cover',
    overflow: 'hidden',
    top: '0',
    left: '0',
    zIndex: -1
  },
  heroMessage: {
    ...theme.mixins.gutters(),
    position: 'absolute',
    width: '100%',
    bottom: '70%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    background: '#ffffff00'
  },
  scrollDown: {
    textAlign: 'center'
  },
  ChevronTripleDown: {
    color: '#fff'
  }
});

function Hero(props) {
  const { classes } = props;

  return (
    <div>
      <div style={{ maxWidth: '960px', margin: 'auto', width: '100%' }}>
        <img
          className={classes.img}
          style={{ width: '100%' }}
          src="https://images.unsplash.com/photo-1549820803-0aa4a001449f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="A Person's back, contemplating the mountains on a sunny day"
        />
      </div>

      <Paper className={classes.heroMessage} elevation={0}>
        <Typography className={classes.scrollDown} variant="h4" component="h3">
          Scroll down for projects.
        </Typography>
        <ChevronTripleDown />
      </Paper>
    </div>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
