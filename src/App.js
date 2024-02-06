import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Coursal } from "./components/Coursal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import Authenticate from "./components/Authenticate";
import { useStytchUser } from "@stytch/react";
import Dashboard from "./components/Dashboard";
function App() {
  const { user } = useStytchUser();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/authenticate" element={<Authenticate />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
