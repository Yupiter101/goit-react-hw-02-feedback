
import PropTypes from 'prop-types';
import "./FeedbackOptions.css";



function FeedbackOptions({ options, onLeaveFeedback }) {

    return (
      <div className="FidbackList">
        {options.map(option => <button 
            className="FidbackBtn"
            key={option} 
            onClick={()=> onLeaveFeedback(option)}
          >{option.charAt(0).toUpperCase() + option.slice(1)}</button>)}
      </div>
    )
  
}

export default FeedbackOptions;




FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
