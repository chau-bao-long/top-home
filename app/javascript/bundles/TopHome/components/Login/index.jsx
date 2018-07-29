// @flow
import React from "react"
import { connect } from "react-redux"
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router'
import { showLoading, login, setError } from "../../actions/loginAction"
import _ from "lodash"

type Props = {
  isLoading: boolean,
  errorMsg: string,
  account: string,
  password: string,
  onSubmit: (e: any) => void,
  onChange: (e: any) => void,
};

export default (props: Props) => {
    const {
      account,
      password,
      isLoading,
      errorMsg,
      onSubmit,
      onChange} = props
    return (
      <div className="login-wrapper wrapper">
        <form className={isLoading ? "login loading" : "login"} onSubmit={onSubmit}>
          <p className="title">Log in</p>
          <p className="login-wrapper__error">{errorMsg}</p>
          <input type="text" placeholder="Account" autoFocus value={account} onChange={onChange}/>
          <i className="fa fa-user"></i>
          <input type="password" placeholder="Password" value={password} onChange={onChange}/>
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
