import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Portfolio from '../Portfolio';

const styles = theme => ({
  root: {
    background: '#2d5f72',
    textAlign: 'center',
    marginTop: '20px',
    paddingTop: '20px'
  },
  typography: {}
});

function MyProjects(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.typography} variant="h4">
        My Projects
      </Typography>
      <Typography className={classes.typography} variant="h5">
        Touch or click on a project to see its details.
      </Typography>
      <Portfolio />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(MyProjects);
