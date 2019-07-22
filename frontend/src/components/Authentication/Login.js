import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {submitLogin} from '../../actions/AuthActions';
import AuthenticationForm from './AuthenticationForm';

class Login extends React.Component{
  onSubmit = formValues => {
    this.props.submitLogin(formValues);
  }

  render(){
    console.log('Login:');
    console.log(this.props.error);
    return(
      <div>
        <h2>Log in to manage your predictions!</h2>
        <AuthenticationForm
          onSubmit={this.onSubmit}
        />
        Not a user? Sign up
        <Link to="/register">
          here
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    error: state.error
  }
}
export default connect(mapStateToProps, { submitLogin })(Login);
