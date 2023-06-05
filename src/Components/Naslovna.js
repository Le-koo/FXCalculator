import {Link} from "react-router-dom";
import "../Css/Naslovna.css";
import laptop from "../slike/laptop.png";
import kalkulator from "../slike/calculator.png";
import pitanje from "../slike/pitanje.png";
import React, {Component} from "react";

export class Naslovna extends Component{ render(){
  return (
    <div>

<div className="hero-container">

      <div className="left-side">
        <h1>FXCalculator</h1>
        <p>Bilo kad i bilo gdje. </p>
        <Link to="/tecajevi">
        <button>Započni →</button>
      </Link>
      </div>
      <div className="right-side">
        <img src={laptop} alt="Hero Image" />
      </div>

    </div>


      <div className="container">
        <h1>Što je FXCalculator</h1>
        <p>FXCalculator je kalkulator koji može preračunati Euro, vodeću svjetsku valutu, u preko 40 različitih valuta diljem svijeta</p>
        <img src={kalkulator}/>
        <h1>Zašto baš FXCalculator?</h1>
        <img src={pitanje}/>
        <p>Mnogi ljudi se ne snalaze s novouvedenim Eurom.
          <br/>
          Iz tog, i mnogih drugih razloga napravili smo FXCalculator.
          <br/>
          FXCalculator koristi tečajeve koji se ažuriraju svake sekunde te tako korisnicima pruža najbolju uslugu
          
        </p>
      </div>
    
    </div>
  );
}
}
export default Naslovna;
