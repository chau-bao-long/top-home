import React from 'react';
import { connect } from 'react-redux'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {account: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    this.props.dispatch({type: "LOGIN", payload: this.state})
  }

  handleChange(e) {
    const t = e.target
    if (t.type === 'password') {
      this.setState({password: t.value})
    } else {
      this.setState({account: t.value})
    }
  }

  render() {
    return (
			<div className="login-wrapper wrapper">
        <form className="login">
          <p className="title">Log in</p>
          <input type="text" placeholder="Account" autoFocus value={this.state.account} onChange={this.handleChange}/>
          <i className="fa fa-user"></i>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          <i className="fa fa-key"></i>
          <a href="#">Forgot your password?</a>
          <button onClick={this.handleSubmit}>
            <i className="spinner"></i>
            <span className="state">Log in</span>
          </button>
        </form>
      </div>
    )
  }
}

// Login.propTypes = {
//   handleSubmit: PropTypes.func.isRequired
// }

export default connect()(Login);

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
