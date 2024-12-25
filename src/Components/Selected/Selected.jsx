import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
const Selected = ({
  selectedPlayerDetails,
  handleDeleteBtn,
  handleActiveBtn,
}) => {

 
  return (
    <div className="w-11/12 mx-auto">
      {selectedPlayerDetails.map((player, idx) => (
        <div
          className="flex justify-between items-center shadow-lg p-5 rounded-md border-b-2 mt-4"
          key={idx}
        >
          <div className="flex items-center gap-10">
            <img className="w-16 h-16 rounded-full" src={player.image} />

            <div className="flex flex-col">
              <p className="font-bold">{player.name}</p>
              <p className="font-bold">{player.category}</p>
              <p className="font-bold">Price: ${player.price}</p>
            </div>
          </div>
          <div className="text-red-300 text-4xl">
            <MdDeleteForever
              className="cursor-pointer"
              onClick={() => handleDeleteBtn(player)}
            ></MdDeleteForever>
          </div>
        </div>
      ))}
      <button
        onClick={() => handleActiveBtn("available")}
        className="bg-[#E7FE29] font-bold p-3 rounded-md mt-5"
      >
        Add More Player
      </button>

        {/* <button onClick={() => handleDeleteInfo(1)}>Delete Item 1</button> */}
      

    </div>
  );
};
Selected.propTypes = {
  selectedPlayerDetails: PropTypes.array.isRequired,
  handleDeleteInfo: PropTypes.func.isRequired,
  handleActiveBtn: PropTypes.func.isRequired,
  handleDeleteBtn: PropTypes.func.isRequired,
};

export default Selected;
