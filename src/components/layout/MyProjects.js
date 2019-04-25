import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: '#75c9d2',
    textAlign: 'center'
  },
  typography: {
    color: '#656455'
  }
});

function MyProjects(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.typography} variant="h4">
        My Projects
      </Typography>
      <Typography className={classes.typography} variant="h5">
        Swipe on slides for details
      </Typography>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(MyProjects);
