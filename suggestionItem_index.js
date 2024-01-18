
import './index.css'

const SuggestionItem = props => {
  const {details, iconClicked} = props
  const {suggestion} = details
  const onclickBtn = () => {
    iconClicked(suggestion)
  }
  return (
    <li className="list">
      <p className="para">{suggestion}</p>
      <button type="button" className="button" onClick={onclickBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
