import React from 'react';
import {Field, reduxForm} from 'redux-form';


class PredictionForm extends React.Component{
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return(
      <form className="ui form error" onSubmit={this.props.handleSumit(this.onSubmit)}>
        <Field name=>
      </form>
    )
  };
};

export default PredictionForm;
