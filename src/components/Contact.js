import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    margin: 10
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h3">Contact Me</Typography>
        <form className={classes.container} autoComplete="off">
          <TextField
            id="name"
            placeholder="Name"
            fullWidth
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="standard-uncontrolled"
            placeholder="Email"
            fullWidth
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="message"
            placeholder="Type your message here..."
            fullWidth
            multiline
            className={classes.textField}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
