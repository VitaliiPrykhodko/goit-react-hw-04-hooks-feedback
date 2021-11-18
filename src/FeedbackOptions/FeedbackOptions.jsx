import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <div className="buttonBox">
      {options.map((option, i) => (
        <button className="btn" type="button" key={i} onClick={()=>onClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
}

export default FeedbackOptions;
