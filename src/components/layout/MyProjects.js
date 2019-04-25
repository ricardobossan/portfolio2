import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: '#d7f2e6'
  }
});

function MyProjects(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h4">My Projects</Typography>
      <Typography variant="h5">Swipe on slides for details</Typography>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(MyProjects);
