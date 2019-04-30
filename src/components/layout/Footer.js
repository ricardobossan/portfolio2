import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    marginTop: '1px',
    /* background: '#00000090' */
    background: '#0d3645'
  },
  materialIcons: {
    color: '#FFF'
  }
};

class Footer extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.materialIcons}
          label="Top"
          icon={<ArrowUpwardIcon />}
        />
        <BottomNavigationAction
          className={classes.materialIcons}
          label="Projects"
          icon={<WorkIcon />}
        />
        <BottomNavigationAction
          className={classes.materialIcons}
          label="Contact"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
