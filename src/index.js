import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'

import { Provider } from 'react-redux'
import ReducerStore from './store/index';


ReactDOM.render(
  <Provider store={ReducerStore()}>
    <Routes/>
  </Provider>
  ,document.getElementById('root')
);
