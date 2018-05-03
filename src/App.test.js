import React from 'react';
import ReactDOM from 'react-dom';
import Feature from './components/Subscribe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feature />, div);
  ReactDOM.unmountComponentAtNode(div);
});
