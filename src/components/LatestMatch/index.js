// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <div className="competing-team-and-image">
        <div className="competing-team-container">
          <p className="competing-team-heading">{competingTeam}</p>
          <p className="competing-team-date">{date}</p>
          <p className="competing-team-text1">{venue}</p>
          <p className="competing-team-text1">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="innings-container">
        <p className="competing-team-innings">First Innings</p>
        <p className="competing-team-text">{firstInnings}</p>
        <p className="competing-team-innings">Second Innings</p>
        <p className="competing-team-text">{secondInnings}</p>
        <p className="competing-team-innings">Man Of The Match</p>
        <p className="competing-team-text">{manOfTheMatch}</p>
        <p className="competing-team-innings">Umpires</p>
        <p className="competing-team-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
