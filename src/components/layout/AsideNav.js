import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { viewTop, viewProjects, viewContact } from '../../actions';

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '16.666667%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper
  },
  asideItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    },
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  asideItemText: {
    textAlign: 'center',
    fontSize: '2em'
  },
  asideItemTextSelected: {
    textAlign: 'center',
    fontSize: '2em',
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  }
});

class AsideNav extends React.Component {
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

  render() {
    const {
      viewSelect,
      viewTop,
      viewProjects,
      viewContact,
      classes
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <List component="nav" className={classes.root}>
          <ListItem
            onClick={() => this.handleViewSwitch(viewTop)}
            classes={{ primary: classes.asideItem }}
            button
          >
            <ListItemText
              color="primary"
              classes={
                viewSelect.view === 0
                  ? { primary: classes.asideItemTextSelected }
                  : { primary: classes.asideItemText }
              }
              primary="Top"
            />
          </ListItem>
          <ListItem
            onClick={() => this.handleViewSwitch(viewProjects)}
            classes={{ primary: classes.asideItem }}
            button
          >
            <ListItemText
              classes={
                viewSelect.view === 1
                  ? { primary: classes.asideItemTextSelected }
                  : { primary: classes.asideItemText }
              }
              primary="Projects"
            />
          </ListItem>
          <ListItem
            onClick={() => this.handleViewSwitch(viewContact)}
            classes={{ primary: classes.asideItem }}
            button
          >
            <ListItemText
              classes={
                viewSelect.view === 2
                  ? { primary: classes.asideItemTextSelected }
                  : { primary: classes.asideItemText }
              }
              primary="Contact"
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

AsideNav.propTypes = {
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
)(withStyles(styles)(AsideNav));
