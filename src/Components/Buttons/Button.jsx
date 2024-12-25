import PropTypes from "prop-types";
const Button = ({ handleActiveBtn, status, selected }) => {
  return (
    <div className="flex flex-col md:flex-row w-11/12 mx-auto justify-between">
      {status.available ? (
        <h3 className="font-bold text-2xl">Available Players</h3>
      ) : (
        <h3 className="font-bold text-2xl">Selected Players({selected}/6)</h3>
      )}
      <div className="flex justify-between gap-4">
        <button
          className={`${
            status.available
              ? "btn focus:bg-orange-700 focus:text-white"
              : "btn"
          }`}
          onClick={() => handleActiveBtn("available")}
        >
          Available
        </button>
        <button
          onClick={() => handleActiveBtn("selected")}
          className={`${
            status.available
              ? "btn"
              : "btn focus:bg-orange-700 focus:text-white"
          }`}
        >
          Selected ({selected})
        </button>
      </div>
    </div>
  );
};
Button.propTypes = {
  handleActiveBtn: PropTypes.func.isRequired,
  status: PropTypes.bool,
  selected: PropTypes.number.isRequired,
};
export default Button;
