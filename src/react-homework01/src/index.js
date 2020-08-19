import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const store = {
  user: {
    firstName: 'Andrew',
    lastName: 'Hopkins'
  },
  avatar: {
    image: `https://asictrade.com/catalog/view/theme/default/image/user-icon.png`,
    alt: 'Avatar is here'
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App userData={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

