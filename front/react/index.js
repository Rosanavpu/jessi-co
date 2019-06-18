import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
//import store from '../redux/store';
//store={store}
ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>,
    document.getElementById('app')

);