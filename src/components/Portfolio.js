import React from 'react';
import Grid from '@material-ui/core/Grid';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

export default () => {
  return (
    <div>
      {/* @todo add guard wrapper "if(mobile)" */}
      <Grid container spacing={8}>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <SwipeableTextMobileStepper />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <SwipeableTextMobileStepper />
        </Grid>
      </Grid>

      {/* @todo add guard wrapper "if(desktop)" */}
    </div>
  );
};
