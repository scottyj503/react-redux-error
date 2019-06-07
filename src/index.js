import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './data/store';
import Test from './features/Test';

const app = document.getElementById('app');

ReactDom.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  app,
);
