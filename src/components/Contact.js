import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    height: '100vh',
    paddingTop: '70px',
    background: '#2d5f72'
  },
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
  },
  contactMe: {
    textAlign: 'center',
    margin: '30px auto 30px auto'
  },
  Button: {
    textTransform: 'none',
    display: 'flex',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

class Contact extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled'
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.contactMe} variant="h3">
          Contact Me
        </Typography>
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
        <div style={{ marginTop: '50px' }}>
          <Button className={classes.Button} elevation={1}>
            <Typography variant="h5">LinkedIn</Typography>
          </Button>
          <Button className={classes.Button} elevation={1}>
            <Typography variant="h5">GitHub</Typography>
          </Button>
          <Button className={classes.Button} elevation={1}>
            <Typography variant="h5">Twitter</Typography>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
