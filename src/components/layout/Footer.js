import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WorkIcon from '@material-ui/icons/Work';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    marginTop: '1px',
    background: '#00000090'
    /*     background: '#2d5f72'
     */
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
        <BottomNavigationAction label="Top" icon={<ArrowUpwardIcon />} />
        <BottomNavigationAction label="Projects" icon={<WorkIcon />} />
        <BottomNavigationAction label="Contact" icon={<ContactsIcon />} />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
