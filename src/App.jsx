import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Players from "./Components/Players/Players";
import Button from "./Components/Buttons/Button";

import Selected from "./Components/Selected/Selected";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [money, setMoney] = useState(0);
  const handleInitialMoney = (status) => {
    if (status) {
      toast.success("Money added: $6000000!");
      setMoney((prevMoney) => prevMoney + 6000000);
    }
  };
  const [players, SetPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => SetPlayers(data));
  }, []);
  const [status, setStatus] = useState({
    available: true,
    status: "active",
  });
  const handleActiveBtn = (status) => {
    if (status == "available") {
      setStatus({
        available: true,
        status: "available",
      });
    } else {
      setStatus({
        available: false,
        status: "selected",
      });
    }
  };
  const [selected, setSelected] = useState(0);
  const [selectedPlayerDetails, setSelectedPlayerDetails] = useState([]);
  const handleChoosePlayer = (playerDetails) => {
    const prevSelected = selected + 1;
    const isExist = selectedPlayerDetails.find(
      (player) => player.id == playerDetails.id
    );
    if (isExist) {
      toast.error("This player is already exist");
      return;
    }
    if (money == 0) {
      toast.warning("You have no money !!");
      return;
    }
    if (prevSelected > 6) {
      toast.warning("You can select upto 6 players");
      return;
    } else {
      toast.success("This player is added");
      setMoney(money - playerDetails.price);
    }
    setSelected(prevSelected);
    setSelectedPlayerDetails((prevDetails) => [...prevDetails, playerDetails]);
  };
  const handleDeleteBtn = (playerDetails) => {
    toast.success("This player is Removed");
    setMoney(money + playerDetails.price);
    const prevSelected = selected - 1;
    const newPlayerDetails = selectedPlayerDetails.filter(
      (player) => player.id !== playerDetails.id
    );
    setSelectedPlayerDetails(newPlayerDetails);
    setSelected(prevSelected);
  };

  const handleDeleteInfo = (id) => {

  };

  return (
    <>
      <Navbar money={money}></Navbar>
      <Banner
        handleInitialMoney={handleInitialMoney}
        selected={selected}
      ></Banner>
      <Button
        selected={selected}
        status={status}
        handleActiveBtn={handleActiveBtn}
      ></Button>

      {status.available ? (
        <Players
          handleDeleteInfo={handleDeleteInfo}
          handleChoosePlayer={handleChoosePlayer}
          players={players}
        ></Players>
      ) : (
        <Selected
          handleDeleteInfo={handleDeleteInfo}
          handleActiveBtn={handleActiveBtn}
          handleDeleteBtn={handleDeleteBtn}
          selectedPlayerDetails={selectedPlayerDetails}
          players={players}
        ></Selected>
      )}
      <Footer></Footer>
      <ToastContainer
        className="custom-toast-container"
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
