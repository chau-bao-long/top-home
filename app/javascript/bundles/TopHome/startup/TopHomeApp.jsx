import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from 'store/topHomeStore'
import HomeComponent from 'components/Home'
import NoMatchComponent from 'components/NoMatch'
import BlogComponent from 'components/Blog'
import PortfolioComponent from 'components/Portfolio'
import LoginComponent from 'components/Login'
import PrivateRoute from 'components/PrivateRoute'
import { CookiesProvider } from 'react-cookie'

const TopHomeApp = (props) => (
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" component={HomeComponent} exact />
          <Route path="/home" component={LoginComponent} />
          <Route path="/blogs" component={BlogComponent} />
          <Route path="/portfolio" component={PortfolioComponent} />
          <Route component={NoMatchComponent}/> 
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

export default TopHomeApp;
