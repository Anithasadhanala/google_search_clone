
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {updatedList: ''}

  changingInput = event => {
    this.setState({updatedList: event.target.value})
  }

  iconClicked = value => {
    this.setState({updatedList: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {updatedList} = this.state
    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(updatedList.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
          alt="google logo"
        />
        <div className="container">
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.changingInput}
              value={updatedList}
            />
          </div>
          <ul className="unordered">
            {filteredList.map(eachItem => (
              <SuggestionItem
                details={eachItem}
                key={eachItem.id}
                iconClicked={this.iconClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
