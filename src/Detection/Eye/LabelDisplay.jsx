import PropTypes from "prop-types";

const LabelDisplay = ({ predictions }) => (
  <div
    style={{
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginTop: "20px",
    }}
  >
    <h2>Prediction Results</h2>
    {predictions.length > 0 ? (
      <ul>
        {predictions.map((prediction, index) => (
          <li key={index}>
            <strong>{prediction.className}</strong>: {prediction.probability.toFixed(2)}
          </li>
        ))}
      </ul>
    ) : (
      <p>No predictions available.</p>
    )}
  </div>
);

LabelDisplay.propTypes = {
  predictions: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string.isRequired,
      probability: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LabelDisplay;
