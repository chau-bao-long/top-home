// @flow
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showLoading, login } from '../../actions/loginAction'

type Props = {
  isLoading: string,
  login: ({account: string, password: string}) => Promise<any>,
  showLoading: (isLoading: boolean) => {}
};

type State = {
  account: string,
  password: string,
}

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentDidCatch(errorString, errorInfo) {
    debugger
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.showLoading(true)
    this.props.login(this.state)
  }

  handleChange = (e) => {
    const t = e.target
    if (t.type === 'password') {
      this.setState({password: t.value})
    } else {
      this.setState({account: t.value})
    }
  }

  render() {
    const { isLoading } = this.props
    return (
			<div className="login-wrapper wrapper">
      <form className={isLoading ? "login loading" : "login"} onSubmit={this.handleSubmit}>
          <p className="title">Log in</p>
          <input type="text" placeholder="Account" autoFocus value={this.state.account} onChange={this.handleChange}/>
          <i className="fa fa-user"></i>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          <i className="fa fa-key"></i>
          <a href="#">Forgot your password?</a>
          <button>
            <i className="spinner"></i>
            <span className="state">{isLoading ? 'Authenticating' : 'Log in'}</span>
          </button>
        </form>
      </div>
    )
  }
}

export default connect(state => state.login, { showLoading, login })(Login);

//var working = false;
//$('.login').on('submit', function(e) {
//  e.preventDefault();
//  if (working) return;
//  working = true;
//  var $this = $(this),
//    $state = $this.find('button > .state');
//  $this.addClass('loading');
//  $state.html('Authenticating');
//  setTimeout(function() {
//    $this.addClass('ok');
//    $state.html('Welcome back!');
//    setTimeout(function() {
//      $state.html('Log in');
//      $this.removeClass('ok loading');
//      working = false;
//    }, 4000);
//  }, 3000);
//});
