import React from 'react';
/* import CssBaseline from '@material-ui/core/CssBaseline';
 */
import { Header, Footer, SimpleCard } from './layout';
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
      {/* <CssBaseline /> */}
      <Header />
      <div style={{ maxWidth: '960px', margin: 'auto', width: '100%' }}>
        <img
          style={{ width: '100%' }}
          src="https://images.unsplash.com/photo-1536105761318-666e135000d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="A Person's back, contemplating the mountains on a sunny day"
        />
      </div>
      <SimpleCard />
      <Footer />
    </React.Fragment>
  );
}

export default App;
