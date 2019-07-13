import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {RadioButtonGroup, SelectField} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton} from 'material-ui/RadioButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class PredictionForm extends React.Component{
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  childContextTypes:{
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext() {
    return {muiTheme: getMuiTheme()};
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

  renderMatchScoreDropdown = (index, props) => {
    return(
      <Field name="matchScore" component={props =>
        <div>
          <SelectField
            value={props.event}
            floatingLabelText = {this.renderTeamValues(index)}
            errorText = {props.touched && props.error}
            {...props}
            onChange = {(event, index, value) => props = event}
          >
            <MenuItem value="0" primaryText="0" />
            <MenuItem value="1" primaryText="1" />
            <MenuItem value="2" primaryText="2" />
            <MenuItem value="3" primaryText="3" />
            <MenuItem value="4" primaryText="4" />
          </SelectField>
        </div>
      }/>
    )
  }

  render(){
    return(
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <Field name="seriesWinner" component={RadioButtonGroup} label="Series Winner:">
            <RadioButton value={this.renderTeamValues(0)} label={this.renderTeamLogo(0)} />
            <RadioButton value={this.renderTeamValues(1)} label={this.renderTeamLogo(1)} />
          </Field>
        </div>
          {this.renderMatchScoreDropdown(0, this.props)}
          {this.renderMatchScoreDropdown(1, this.props)}
        <button className="ui button primary">Submit</button>
      </form>
    )
  };
};


const validate = (formValues)=>{
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
