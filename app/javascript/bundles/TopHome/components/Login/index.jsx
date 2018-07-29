// @flow
import React from "react"
import { connect } from "react-redux"
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router'
import { showLoading, login, setError } from "../../actions/loginAction"
import _ from "lodash"

type Props = {
  isLoading: string,
  login: ({account: string, password: string}) => Promise<any>,
  showLoading: (isLoading: boolean) => {},
  setError: (error?: string) => {},
  errorMsg: string,
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
    (
      <div className="login-wrapper wrapper">
        <form className={isLoading ? "login loading" : "login"} onSubmit={this.handleSubmit}>
          <p className="title">Log in</p>
          <p className="login-wrapper__error">{errorMsg}</p>
          <input type="text" placeholder="Account" autoFocus value={account} onChange={this.handleChange}/>
          <i className="fa fa-user"></i>
          <input type="password" placeholder="Password" value={password} onChange={this.handleChange}/>
          <i className="fa fa-key"></i>
          <a href="#">Forgot your password?</a>
          <button>
            <i className="spinner"></i>
            <span className="state">{isLoading ? "Authenticating" : "Log in"}</span>
          </button>
        </form>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.errorMsg != this.props.errorMsg) this.setState({password: ""})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.validate()) return
    this.props.showLoading(true)
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

export default withCookies(connect(state => state.login, { showLoading, login, setError })(Login));
