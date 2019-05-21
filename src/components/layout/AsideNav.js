import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  asideItemText: {
    textAlign: 'center',
    fontSize: '2em'
  }
});

class NestedList extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <List component="nav" className={classes.root}>
          <ListItem className={classes.asideItem} button>
            <ListItemText
              onClick={this.handleClick}
              classes={{ primary: classes.asideItemText }}
              primary="Top"
            />
          </ListItem>
          <ListItem className={classes.asideItem} button>
            <ListItemText
              onClick={this.handleClick}
              classes={{ primary: classes.asideItemText }}
              primary="Projects"
            />
          </ListItem>
          <ListItem
            className={classes.asideItem}
            button
            onClick={this.handleClick}
          >
            <ListItemText
              classes={{ primary: classes.asideItemText }}
              primary="Contact"
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
