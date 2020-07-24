import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Exterior from '../Pages/Exterior/Exterior';
import Interior from '../Pages/Interior/Interior';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile'
import Register from '../Pages/Register/Register'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={Exterior}/>
        <Route exact path="/interior" component={Interior}/>
      </Router>
    <div className="bottom-page">
      <Footer />
    </div>
    </div>
  );
}

export default App;
