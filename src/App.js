import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

{
  /**
   * TODOS:
   *
   * @todo Create Light and Dark [themes](https://material-ui.com/customization/themes/), set upon Redux global state.
   */
}

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </React.Fragment>
  );
}

export default App;
