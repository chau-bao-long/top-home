import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from '../store/topHomeStore';
import HomeComponent from '../components/Home';
import NoMatchComponent from '../components/NoMatch';
import BlogComponent from '../components/Blog';
import PortfolioComponent from '../components/Portfolio';
import LoginComponent from '../components/Login';

const TopHomeApp = (props) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeComponent} exact />
        <Route path="/home" component={LoginComponent} />
        <Route path="/blogs" component={BlogComponent} />
        <Route path="/portfolio" component={PortfolioComponent} />
        <Route component={NoMatchComponent}/> 
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default TopHomeApp;
