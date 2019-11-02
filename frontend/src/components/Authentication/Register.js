import React from 'react';
import {submitRegister} from '../../actions/AuthActions';
import {connect} from 'react-redux';
import AuthenticationForm from './AuthenticationForm';
import styles from '../../stylesheets/AuthenticationForm.module.scss';

class Register extends React.Component{
  onSubmit = formValues => {
    this.props.submitRegister(formValues);
  }

  render(){
    return(
      <div className={styles['form-container']}>
        <AuthenticationForm
          isRegistration={true}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    error: state.error
  }
}

export default connect(mapStateToProps, { submitRegister })(Register);
