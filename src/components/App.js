import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import { Header, Hero, Footer, MyProjects } from './layout/';
import Portfolio from './Portfolio';

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
console.log(theme);
const mainTheme = createMuiTheme(theme);
function App() {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Hero />
        <MyProjects />
        <Portfolio />
        <Footer />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
