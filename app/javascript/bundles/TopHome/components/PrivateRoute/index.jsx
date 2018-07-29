import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  constructor({ component, allCookies, cookies, ...rest }) {
    super()
    this.component = component
    this.isAuthenticated = allCookies["is_auth"]
    this.rest = rest
  }

  render() {
    return (
      <Route {...this.rest} render={props =>
        this.isAuthenticated ? (
          <this.component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        )
      }
      />
    )
  }
}

export default withCookies(PrivateRoute)
