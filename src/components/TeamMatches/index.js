// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamsMatchList: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const matchesUpdate = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachCard =>
        this.getFormattedData(eachCard),
      ),
    }

    this.setState({
      teamsMatchList: matchesUpdate,
      isLoading: false,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {teamsMatchList, isLoading} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = teamsMatchList
    const ClassName = `team-matches-container ${this.getRouteClassName()}`

    return isLoading ? (
      <div data-testid="loader" className={`loader-container ${ClassName}`}>
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={ClassName}>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchData={latestMatch} />
        <ul className="un-order-list">
          {recentMatches.map(eachList => (
            <MatchCard key={eachList.id} matchDetails={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
