import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Exterior from '../Pages/Exterior/Exterior';
import Interior from '../Pages/Interior/Interior';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/car-configurator--pt2" component={Exterior}/>
        <Route exact path="/car-configurator--pt2/interior" component={Interior}/>
      </Router>
    <div className="bottom-page">
      <Footer />
    </div>
    </div>
  );
}

export default App;
