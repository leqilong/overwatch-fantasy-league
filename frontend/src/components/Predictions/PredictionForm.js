import React from 'react';
import {Field, reduxForm} from 'redux-form';
//import {SelectField} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class PredictionForm extends React.Component{
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  renderError({error, touched}){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderTeamLogo = index => {
    return (
      <div>
        <img src={this.props.matchData["competitors"][index]["icon"]} />
        <div>
          <p>{this.props.matchData["competitors"][index]["name"]}</p>
        </div>
      </div>
    )
  }

  renderTeamValues = index => {
    return this.props.matchData["competitors"][index]["name"];
  }

  renderMatchScoreDropdown = ({input, label, meta}) => {
    console.log('PredictionForm props:');
    console.log(input.value);
    return(
      <div>
        <SelectField
          value = {input.value}
          floatingLabelText = {label}
          errorText = {meta.touched && meta.error}
          {...input}
          onChange={(event, index, value) => input.onChange(value)}
        >
          {this.renderMenuItem()}
        </SelectField>
        <button className="ui button primary" onClick={()=> this.props.resetSection(`${label}`)}>Reset</button>
      </div>
    )
  }
  
  renderMenuItem = () => {
    let menu = [];
    const scores = [0, 1, 2, 3, 4];
    scores.map(score => {
      menu.push(<MenuItem key={score} value={score} primaryText={score} />)
    });
    return menu;
  }

  renderError({error, touched}){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  render(){
    const renderRadioGroup = ({ input, meta: {touched, error}, ...rest}) => (
      <div>
        <RadioButtonGroup {...input} {...rest}
          valueSelected={input.value}
          onChange={(event, value) => input.onChange(value)}
        />
        {this.renderError({touched, error})}
      </div>
    )
    return(
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <Field name="seriesWinner" component={renderRadioGroup} label="Series Winner:">
            <RadioButton value={this.renderTeamValues(0)} label={this.renderTeamLogo(0)} />
            <RadioButton value={this.renderTeamValues(1)} label={this.renderTeamLogo(1)} />
          </Field>
        </div>
        <Field name="seriesScoreTeam1" component={this.renderMatchScoreDropdown} label={this.renderTeamValues(0)} />
        <Field name="seriesScoreTeam2" component={this.renderMatchScoreDropdown} label={this.renderTeamValues(1)} />
        <button className="ui button primary">Submit</button>
      </form>
    )
  };
};


const validate = formValues =>{
  const errors = {};
  if (!formValues.seriesWinner){
    errors.seriesWinner = 'You must select a series winner';
  }

  return errors;

}

export default reduxForm({
  form: 'predictionForm',
  validate
})(PredictionForm);
