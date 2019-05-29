import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Link } from '@material-ui/core';

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
  },
  sendButton: {
    margin: 10,
    backgroundColor: theme.palette.primary.main
  }
});

class Contact extends React.Component {
  /*   constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.messageInput = React.createRef();
  }
 */ state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    Name: '',
    Email: '',
    Message: ''
  };

  /*   inputChange = (e) => this.setState({e.target.name})
   */
  submitForm = () => {
    setTimeout(() => this.setState({ Name: '', Email: '', Message: '' }), 1000);
    /*     this.nameInput.current.state = '';
    this.emailInput.current.state = '';
    this.messageInput.current.state = '';

 */
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const { Name, Email, Message } = this.state;
    return (
      <div className={classes.root}>
        <Typography className={classes.contactMe} variant="h3">
          Contact Me
        </Typography>
        <form
          onSubmit={this.submitForm}
          className={classes.container}
          action="mailto:mail@ricardobossan.com"
          method="post"
          enctype="text/plain"
          autoComplete="off"
        >
          <TextField
            onChange={this.handleChange}
            value={Name}
            name="Name"
            required
            id="name"
            placeholder="Name"
            fullWidth
            className={classes.textField}
            margin="normal"
          />

          <TextField
            onChange={this.handleChange}
            value={Email}
            name="Email"
            required
            id="standard-uncontrolled"
            placeholder="Email"
            fullWidth
            className={classes.textField}
            margin="normal"
          />

          <TextField
            onChange={this.handleChange}
            value={Message}
            name="Message"
            required
            id="message"
            placeholder="Type your message here..."
            fullWidth
            multiline
            className={classes.textField}
            margin="normal"
          />
          <Button
            type="submit"
            className={classes.sendButton}
            variant="outlined"
            elevation={1}
          >
            <Typography color="#FFF" variant="h6">
              Send
            </Typography>
          </Button>
        </form>
        <div style={{ marginTop: '50px' }}>
          <Link
            href="https://www.linkedin.com/in/ricardo-bossan"
            underline="none"
          >
            <Button className={classes.Button} elevation={1}>
              <Typography variant="h5">LinkedIn</Typography>
            </Button>
          </Link>
          <Link href="https://github.com/ricardobossan" underline="none">
            <Button className={classes.Button} elevation={1}>
              <Typography variant="h5">GitHub</Typography>
            </Button>
          </Link>
          <Link href="https://twitter.com/BossanRicardo" underline="none">
            <Button className={classes.Button} elevation={1}>
              <Typography variant="h5">Twitter</Typography>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
