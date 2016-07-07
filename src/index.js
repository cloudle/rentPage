import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

const MuiApp = () => {
  return <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
};

ReactDOM.render(<MuiApp />, document.getElementById('root'));