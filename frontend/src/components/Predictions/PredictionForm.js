import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {SelectField} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
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

  renderMatchScoreDropdown = (index, props) => {
    return(
      <Field name={this.renderTeamValues(index)} component={props =>
        <div>
          <SelectField
            value={props.input.value}
            floatingLabelText = {this.renderTeamValues(index)}
            errorText = {props.touched && props.error}
            {...props}
            onChange = {(event, index, value) => console.log(props.input.value)}
          >
            {this.renderMenuItem()}
          </SelectField>
          <button className="ui button primary" onClick={()=> this.props.resetSection(this.renderTeamValues(index))}>Reset</button>
        </div>
      }/>
    )
  }

  renderMenuItem = () => {
    let menu = [];
    const scores = ["0", "1", "2", "3", "4"];
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
          {this.renderMatchScoreDropdown(0, this.props)}
          {this.renderMatchScoreDropdown(1, this.props)}
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
