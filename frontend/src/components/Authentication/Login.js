import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {submitLogin} from '../../actions/AuthActions';
import AuthenticationForm from './AuthenticationForm';
import styles from '../../stylesheets/AuthenticationForm.module.scss';

class Login extends React.Component{
  onSubmit = formValues => {
    this.props.submitLogin(formValues);
  }

  render(){
    return(
      <div>
        <h2>Log in to manage your predictions!</h2>
        <AuthenticationForm
          onSubmit={this.onSubmit}
        />
        <h4>Not a user? Sign up
          <Link to="/register" className={styles['link']}> here</Link>
        </h4>
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
