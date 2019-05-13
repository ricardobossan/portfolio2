import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';

import { viewTop, viewProjects, viewContact } from '../../actions';

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
  /* test */
  handleViewSwitch = action => {
    const { viewSelect } = this.props;
    action();
    window.scrollTo(viewSelect.screenX, viewSelect.screenY);
  };

  /* handleScroll = e => {}; */

  render() {
    console.log(this.props);
    const {
      classes,
      viewSelect,
      viewTop,
      viewProjects,
      viewContact
    } = this.props;
    return (
      <BottomNavigation
        value={viewSelect.view}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          onClick={() => this.handleViewSwitch(viewTop)}
          className={classes.materialIcons}
          label="Top"
          icon={<ArrowUpwardIcon />}
        />
        <BottomNavigationAction
          onClick={() => this.handleViewSwitch(viewProjects)}
          className={classes.materialIcons}
          label="Projects"
          icon={<WorkIcon />}
        />
        <BottomNavigationAction
          onClick={() => this.handleViewSwitch(viewContact)}
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

const mapStateToProps = state => state;

const mapDispatchToProps = {
  viewTop,
  viewProjects,
  viewContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Footer));
