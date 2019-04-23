import React from 'react';
/* import CssBaseline from '@material-ui/core/CssBaseline';
 */
import { Header, Hero, Footer } from './layout/';
import Portfolio from './Portfolio';

function App() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
