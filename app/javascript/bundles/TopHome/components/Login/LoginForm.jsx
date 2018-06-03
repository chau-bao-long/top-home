import React from 'react';

class LoginForm extends React.component {
  render() {
    return (
			<div className="wrapper">
        <form className="login">
          <p className="title">Log in</p>
          <input type="text" placeholder="Username" autofocus/>
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

export default LoginForm;

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
