import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header, Hero, Footer } from './layout/';
import Portfolio from './Portfolio';

import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
{
  /* @todo add a light/dark theme switch, with a Redux store 
  Type (light /dark theme)
You can make the theme dark by setting type to dark. While it's only a single property value change, internally it modifies the value of the following keys:

```
palette.text
palette.divider
palette.background
palette.action
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
```

*/
}

{
  /* @palette https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=2d5e72&secondary.color=0d3645 */
}
const theme = createMuiTheme({
  palette: {
    common: { black: 'rgba(0, 0, 0, 1)', white: 'rgba(255, 255, 255, 1)' },
    background: {
      paper: '#2d5f72',
      default: '#2d5f72'
    },
    primary: {
      light: 'rgba(92, 139, 161, 1)',
      main: '#75c9d2',
      dark: 'rgba(0, 52, 71, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    secondary: {
      light: 'rgba(60, 96, 112, 1)',
      main: 'rgba(13, 54, 69, 1)',
      dark: 'rgba(0, 16, 30, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: 'rgba(214, 214, 214, 1)'
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
});
console.log(theme);
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Hero />
        <Portfolio />
        <Footer />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
