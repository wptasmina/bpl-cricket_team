import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../src/assets/images/logo.png";
import currency from "../../../src/assets/images/Currency.png";
import PropTypes from "prop-types";
function Navbar({ money }) {
  return (
    <header className=" sticky top-0 bg-nav_bg/30 backdrop-blur-sm border-b shadow z-50">
      <div className="navbar w-11/12 mx-auto  md:px-0 px-4 py-2">
        <div className="navbar-start w-1/4 md:w-1/2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-center">
          {/* dropdown */}
          <div className="dropdown block md:hidden">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle"
            >
              {/* added navbar icon */}
              <RxHamburgerMenu></RxHamburgerMenu>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fixture</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end md:gap-5 w-full">
          {/* navbar anchor */}

          <div className=" hidden md:block">
            <div className="flex  list-none justify-between gap-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fixture</a>
              </li>
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
            </div>
          </div>

          <div className="flex items-center gap-1 text-md text-black px-4 py-2 border-2 rounded-md p-2 ">
            {money} coin
            <img src={currency} />
          </div>
        </div>
      </div>
    </header>
  );
}
Navbar.propTypes = {
  money: PropTypes.number.isRequired,
};
export default Navbar;
