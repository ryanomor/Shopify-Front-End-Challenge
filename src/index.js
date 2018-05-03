import React from 'react';
import ReactDOM from 'react-dom';
import Feature from './components/Subscribe';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Feature />, document.getElementById('root'));
registerServiceWorker();
