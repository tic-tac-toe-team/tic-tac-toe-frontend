import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import StartPage from './components/StartPage/StartPage';
import Modal from "./components/Modal/Modal";

function App() {
    const handleModal = () => {
    };

  return (
    <>
      {/*<Login></Login>*/}
      <SignUp></SignUp>
      {/*  <StartPage></StartPage>*/}
      {/*<Modal isOpen={true} onClose={handleCloseModal} message={"{PlayerName} win!"} />*/}
      {/*<Modal isOpen={true} onQuit={handleModal} onNewRound={handleModal} message={"The game ended in a draw. Nobody won:("} />*/}
    </>
  );
}

export default App;
