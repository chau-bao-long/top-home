import React from 'react';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({type: "LOGIN", payload: {email: "d", pwd: 's'}})
  }

  render() {
    return (
			<div className="login-wrapper wrapper">
        <form className="login" onSubmit={this.handleSubmit}>
          <p className="title">Log in</p>
          <input type="text" placeholder="Username" autoFocus/>
          <i className="fa fa-user"></i>
          <input type="password" placeholder="Password" />
          <i className="fa fa-key"></i>
          <a href="#">Forgot your password?</a>
          <button>
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

export default Login;

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
