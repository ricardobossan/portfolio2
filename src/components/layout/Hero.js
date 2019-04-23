import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChevronTripleDown from '@material-ui/icons/ArrowDownward';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Hero(props) {
  const { classes } = props;

  return (
    <div>
      <div style={{ maxWidth: '960px', margin: 'auto', width: '100%' }}>
        <img
          style={{ width: '100%' }}
          src="https://images.unsplash.com/photo-1549820803-0aa4a001449f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="A Person's back, contemplating the mountains on a sunny day"
        />
      </div>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h3">
          Scroll down for projects I worked on.
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
