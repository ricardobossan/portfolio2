import React from 'react';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

export default () => {
  return (
    <div>
      {/* @todo add guard wrapper "if(mobile)" */}
      <SwipeableTextMobileStepper />
      <SwipeableTextMobileStepper />
      <SwipeableTextMobileStepper />
      <SwipeableTextMobileStepper />
      <SwipeableTextMobileStepper />
      <SwipeableTextMobileStepper />

      {/* @todo add guard wrapper "if(desktop)" */}
    </div>
  );
};
