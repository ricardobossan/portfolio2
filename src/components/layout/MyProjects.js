import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Portfolio from '../Portfolio';

import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    background: '#2d5f72',
    textAlign: 'center',
    paddingTop: '0px'
  },
  callToAction: { padding: '80px 45px 45px 45px' }
});

function MyProjects(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.callToAction}>
        <Typography className={classes.typography} variant="h5">
          <Hidden lgUp>
            <span>Tap </span>
          </Hidden>
          <Hidden mdDown>
            <span>Click </span>
          </Hidden>
          on a project to start it!
        </Typography>
      </div>
      <Portfolio />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(MyProjects);
