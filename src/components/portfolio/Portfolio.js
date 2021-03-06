import React from 'react';
import Grid from '@material-ui/core/Grid';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

import projectSteps from './projectSteps';

export default () => {
  return (
    <div>
      <Grid container spacing={8}>
        {projectSteps.map(project => (
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <SwipeableTextMobileStepper
              projectIndex={project.id}
              projectPath={project.projectPath}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
