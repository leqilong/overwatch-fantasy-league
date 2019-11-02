import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import _ from 'lodash';
import cx from 'classnames';
import styles from '../../stylesheets/AuthenticationForm.module.scss';

class AuthenticationForm extends React.Component{
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  renderError({error, touched}){
    if(touched && error){
      return(
        <div className="error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, type, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type} />
        {this.renderError(meta)}
      </div>
    )
  }

  renderPasswordConfirmation() {
    if(this.props.isRegistration){
      return(
        <Field name="passwordConfirm" type='password' component={this.renderInput} label="Confirm Password"/>
      )
    }
  }

  renderAuthError(){
    if(!_.isEmpty(this.props.authError)){
      return(
        <div className="error message">
          <div className="header">{this.props.authError}</div>
        </div>
      )
    }
  }

  render(){
    return(
      <div className={styles['form']}>
        <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name='username' type='text' component={this.renderInput} label='Username' />
          <Field name='password' type='password' component={this.renderInput} label='Password' />
          {this.renderPasswordConfirmation()}
          {this.renderAuthError()}
          <button className={cx(styles['button'], styles['submit'])}>Submit</button>
        </form>
      </div>
    )
  };
};


const validate = formValues =>{
  const errors = {};
  if (!formValues.username){
    errors.username = 'Required';
  }

  if (!formValues.password){
    errors.password = 'Required';
  }
  return errors;

}

const mapStateToProps = state => {
  return{
    authError: state.error
  }
}
AuthenticationForm = connect(mapStateToProps)(AuthenticationForm);

export default reduxForm({
  form: 'authenticationForm',
  validate
})(AuthenticationForm);
