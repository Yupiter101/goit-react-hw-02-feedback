
import PropTypes from 'prop-types';
import "./Statistics.css";


function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
      <>
        <ul className="StatList">
          <li className="StatItem">good:<span>{good}</span></li>
          <li className="StatItem">neutral:<span>{neutral}</span></li>
          <li className="StatItem">bad:<span>{bad}</span></li>

          <li className="StatItem">Total:<span>{total()}</span></li>
          <li className="StatItem">Positve feedback:<span>{positivePercentage()}%</span></li>
        </ul>
      </>
    )
}

export default Statistics;



Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired
}