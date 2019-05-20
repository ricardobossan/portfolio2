import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Hidden from '@material-ui/core/Hidden';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';

import { viewTop, viewProjects, viewContact } from '../../actions';

import store from '../../store';

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
  handleViewSwitch = async action => {
    // "Gambiarra", to call action and, at the same time, save one if it's returned values for scrolling to it, without using async logic.
    const actionReturnValues = action();
    // Side effect. Need applyMiddleware and react-thunk, to make the dispatch asyncronous, conditioning side effects to it
    window.scrollTo({
      left: 0,
      top: actionReturnValues.dispatch.screenY,
      behavior: 'smooth'
    });
  };

  /* handleScroll = e => {}; */

  render() {
    const {
      classes,
      viewSelect,
      viewTop,
      viewProjects,
      viewContact
    } = this.props;
    return (
      <Hidden lgUp>
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
      </Hidden>
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
