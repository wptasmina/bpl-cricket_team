import { FaUser } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";
import PropTypes from "prop-types";
const Player = ({ player, handleChoosePlayer }) => {
  player;
  const {
    name,
    batting_style,
    bowling_style,
    nationality,
    price,
    category,
    image,
  } = player;

  return (
    <div>
      <div className="card bg-base-100 p-5 shadow-md">
        <figure>
          <div className="w-full h-[240px]">
            <div
              className=" w-full h-full object-cover bg-cover bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        </figure>
        <p className="flex gap-3 my-5  font-bold items-center text-xl">
          <FaUser></FaUser> {name}
        </p>
        <div className="flex justify-between">
          <p className="flex gap-3 items-center text-[20px] opacity-80">
            <IoIosFlag></IoIosFlag> {nationality}
          </p>
          <button className="btn">{category}</button>
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="font-bold mb-3">Rating</h2>
        </div>
        <div className="flex justify-between ">
          <p className=" font-bold">{batting_style}-bat</p>
          <p>{bowling_style ? bowling_style : "N/A"}</p>
        </div>

        <div className="flex my-3 justify-between items-center font-bold">
          <p>Price: ${price}</p>
          <button
            onClick={() => handleChoosePlayer(player)}
            className="btn hover:bg-[#E7FE29]"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};
Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
  handleDeleteInfo: PropTypes.func.isRequired,
};
export default Player;
