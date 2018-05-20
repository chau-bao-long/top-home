import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from '../store/topHomeStore';
import TopHomeContainer from '../containers/TopHomeContainer';
import HomeComponent from '../components/Home';
import NoMatchComponent from '../components/NoMatch';
import BlogComponent from '../components/Blog';
import PortfolioComponent from '../components/Portfolio';

const TopHomeApp = (props) => (
  <Provider store={configureStore(props)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeComponent} exact={true} />
        <Route path="/home" component={TopHomeContainer} />
        <Route path="/blogs" component={BlogComponent} />
        <Route path="/portfolio" component={PortfolioComponent} />
        <Route component={NoMatchComponent}/> 
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default TopHomeApp;
