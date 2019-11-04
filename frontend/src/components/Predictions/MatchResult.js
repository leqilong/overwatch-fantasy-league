import React from 'react';
import styles from '../../stylesheets/MatchesList.module.scss'
import resultStyles from '../../stylesheets/MatchResult.module.scss';

class MatchResult extends React.Component{

  state = {
    resultDetailsOpen: false
  };

  renderMapsTableHeader(games){
    return(
      <React.Fragment>
        <th>Teams</th>
        {games.map(game=>{ return(<th key={game['id']}>{game['attributes']['map']}</th>)})}
      </React.Fragment>
    )
  }

  renderMapScoresTableRow(match, competitorIndex){
    return(
      <React.Fragment>
        <td>{match['competitors'][competitorIndex]['abbreviatedName']}</td>
        {match.games.map(game =>{ return(<td key={game['id']}>{game['points'][competitorIndex]}</td>)})}
      </React.Fragment>
    )
  }

  toggleResultDetails = () => {
    this.setState(previousState => ({
      resultDetailsOpen: !previousState.resultDetailsOpen
    }));
  }

  render(){
    return(
      <div>
        <div className={styles['dropdown-header']}>
          Match Result
          <span
            className={`${this.state.resultDetailsOpen ? styles['delta-down'] : styles['delta-up']}`}
            onClick={this.toggleResultDetails}
          >
          </span>
        </div>
        <div className={`${this.state.resultDetailsOpen ? styles['shouldDisplay'] : styles['shouldHide']}`}>
          <div className={styles['final-score-container']}>
            <h3>Final Score</h3>
            <p>
              <span>{this.props.match['competitors'][0]['abbreviatedName']}</span>
              {this.props.match['scores'][0]['value']}
              <span>:</span>
              {this.props.match['scores'][1]['value']}
              <span>{this.props.match['competitors'][1]['abbreviatedName']}</span>
            </p>
          </div>
          <div className={resultStyles['table-container']}>
            <table className={resultStyles['score-table']}>
              <tbody>
                <tr>{this.renderMapsTableHeader(this.props.match.games)}</tr>
                <tr>{this.renderMapScoresTableRow(this.props.match, 0)}</tr>
                <tr>{this.renderMapScoresTableRow(this.props.match, 1)}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchResult;
