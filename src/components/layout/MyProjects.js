import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Portfolio from '../Portfolio';

const styles = theme => ({
  root: {
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
          Touch on a project to see its details.
        </Typography>
      </div>
      <Portfolio />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(MyProjects);
