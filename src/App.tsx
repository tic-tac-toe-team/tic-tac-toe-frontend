import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import StartPage from './components/StartPage/StartPage';
import RoomList from "./components/RoomsList/RoomsList";
import GamePage from "./components/GamePage/GamePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/rooms" element={<ProtectedRoute element={<RoomList />} />} />
          <Route path="/game/:gameId" element={<ProtectedRoute element={<GamePage />} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};

export default App;
