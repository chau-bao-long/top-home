// @flow
import React from "react"
import { connect } from "react-redux"
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router'
import { login } from "../../actions/loginAction"
import { error } from "../../actions/apiAction"
import LoginComponent from "../../components/Login"
import { selector } from "../../selectors/login"
import _ from "lodash"

type Props = {
  isLoading: boolean,
  login: (payload: {}) => Promise<any>,
  setError: (error?: string) => {}, errorMsg: string,
  allCookies: {is_auth: string},
};

type State = {
  account: string,
  password: string,
}

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      account: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { isLoading, errorMsg } = this.props
    const { account, password } = this.state
    return this.isAuthenticated() ? <Redirect to="/iot"/> :
      <LoginComponent 
        isLoading={isLoading}
        errorMsg={errorMsg}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        account={account}
        password={password}/>
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.errorMsg != this.props.errorMsg) this.setState({password: ""})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.validate()) return
    this.props.login(this.state)
  }

  handleChange = (e) => {
    this.resetErrorMsg()
    const t = e.target
    if (t.type === "password") {
      this.setState({password: t.value})
    } else {
      this.setState({account: t.value})
    }
  }

  validate = () => {
    let error = ""
    if (!this.state.account || !this.state.password) error += "Account/password cannot be empty"
    this.props.setError(error)
    return !error
  }

  resetErrorMsg = () => {
    if (this.props.errorMsg) this.props.setError()
  }

  isAuthenticated = (): boolean => !!this.props.allCookies["is_auth"]
}

const setError = error.login

export default withCookies(connect(selector, { login, setError })(Login));
