import Player from "./Player/Player";
import PropTypes from "prop-types";
const Players = ({ players,handleChoosePlayer }) => {
  return (
    <>
      <div className="my-10 w-11/12 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((p) => (
          <Player
            handleChoosePlayer={handleChoosePlayer}
            key={p.id}
            player={p}
          ></Player>
        ))}
      </div>
    </>
  );
};
Players.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      batting_style: PropTypes.string.isRequired,
      bowling_style: PropTypes.string.isRequired,
      nationality: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
  handleDeleteInfo: PropTypes.func.isRequired,
};
export default Players;
