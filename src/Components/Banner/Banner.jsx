import PropTypes from "prop-types";
import bgImg from "../../../src/assets/images/banner-main.png";
import backgroundImg from "../../../src/assets/images/bg-shadow.png";

const Banner = ({ handleInitialMoney }) => {
  return (
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className=" w-11/12 bg-[#131313] mx-auto bg-cover bg-center flex flex-col justify-center items-center gap-5 py-10 rounded-md px-2 mb-10"
      >
        <img className="mx-auto " src={bgImg} alt="avata" />
        <div>
          <h1 className="md:w-2/3 w-full mx-auto md:text-4xl text-2xl text-center font-extrabold tracking-wider text-yellow-50 py-6 ">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-center text-lg tracking-wider font-extralight text-yellow-50 pb-6">
            Beyond Boundaries Beyond Limits
          </p>
        </div>
        <span className="border border-orange-700 rounded-md p-1">
          <button
            onClick={() => handleInitialMoney("status")}
            className=" bg-orange-700
           text-white
         text-center font-bold p-2 rounded-md hover:bg-slate-50 hover:text-black "
          >
            Claim Free Credit
          </button>
        </span>
      </div>
  );
};
Banner.propTypes = {
  handleInitialMoney: PropTypes.func.isRequired,
};

export default Banner;
