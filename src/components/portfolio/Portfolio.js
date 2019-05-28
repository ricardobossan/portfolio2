import React from 'react';
import Grid from '@material-ui/core/Grid';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

import projectSteps from './projectSteps';

export default () => {
  return (
    <div>
      {/* @todo add guard wrapper "if(mobile)" */}
      <Grid container spacing={8}>
        {projectSteps.map(projectIndex => (
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <SwipeableTextMobileStepper projectIndex={projectIndex.id} />
          </Grid>
        ))}
      </Grid>
      {/* @todo add guard wrapper "if(desktop)" */}
    </div>
  );
};
