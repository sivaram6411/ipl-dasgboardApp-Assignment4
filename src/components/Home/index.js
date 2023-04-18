// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {TeamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data.teams[0].name)
    const updatedTeamData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({TeamData: updatedTeamData, isLoading: false})
  }

  render() {
    const {TeamData, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="list-details">
          {isLoading ? (
            <div data-testid="loader" className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            TeamData.map(eachList => (
              <TeamCard key={eachList.id} teamDetails={eachList} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
