import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
ReactDOM.render(<App />, document.getElementById('root'));

render(
    // Wrap the <App /> in a provider
    <Router>
      <App />
    </Router>
    , document.querySelector('#root')
  )

  