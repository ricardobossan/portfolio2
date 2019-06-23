import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import projectSteps from './projectSteps';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/* const projectSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://raw.githubusercontent.com/ricardobossan/fend-project-memory-game-master/master/img/app.png'
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
  }
];*/

const styles = theme => ({
  root: {
    margin: 'auto',
    flexGrow: 1,
    borderBottom: '5px solid rgba(0,0,0,0.14)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    backgroundColor: theme.palette.background.default
  },
  appName: {
    margin: 'auto'
  },
  img: {
    height: 255,
    display: 'block',
    overflow: 'hidden',
    width: '100%'
  },
  myProjects: {
    background: '#fdfad6'
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme, projectIndex, projectPath } = this.props;
    const { activeStep } = this.state;
    const maxSteps = projectSteps[projectIndex].imgPath.length;

    return (
      <Grid className={classes.root} xs={12}>
        <Paper square elevation={0} className={classes.header}>
          <Typography className={classes.appName}>
            {projectSteps[projectIndex].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {projectSteps[projectIndex].imgPath.map(step => (
            <div tabIndex={-1} key={step.label}>
              <a tabIndex={projectIndex === 0 ? 0 : -1} href={projectPath}>
                <img
                  tabIndex={-1}
                  className={classes.img}
                  src={step}
                  alt={projectSteps[projectIndex].label}
                />
              </a>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          tabIndex={-1}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              tabIndex={-1}
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft tabIndex={-1} />
              ) : (
                <KeyboardArrowRight tabIndex={-1} />
              )}
            </Button>
          }
          backButton={
            <Button
              tabIndex={-1}
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight tabIndex={-1} />
              ) : (
                <KeyboardArrowLeft tabIndex={-1} />
              )}
              Back
            </Button>
          }
        />
      </Grid>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
