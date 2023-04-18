// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  const status =
    matchStatus === 'Won' ? 'match-card-status1' : 'match-card-status'

  return (
    <li className="match-card-list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-text">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
