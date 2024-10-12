import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <header className="header-container">
      <Nav/>
      <div className="header-content">
        <h1 className="main-title">
        Ανδρικό <img src="assets/images/cut.png" alt="Scissors" className="scissors-icon" /> Παιδικό
        </h1>
        <h2 className="secondary-title">ΚΟΥΡΕΙΟ</h2>
        <p className="since">Since <label id="koureio">by KONSTANTINOS</label> 2015</p>
        <p className='txt_hd'>Το Κουρείο Konstantinos είναι το κορυφαίο σημείο για τις ανάγκες περιποίησης των μαλλιών σας στην πόλη σας!</p>
        <button className='mk_app'>Kλείσε Ραντεβού</button>
      </div>
      <div className="columns">
        <div className="column">
          <h3 className='cl_hd'>Διεύθυνση</h3> 
          <label>Καλαμά 2, Περιστέρι, 12136</label>
        </div>
        <div className="column">
          <h3 className='cl_hd'>Τηλέφωνο για Ραντεβού</h3> 
          <label>+30 211 2155 952</label>
        </div>
        <div className="column td">
          <h3 className='cl_hd'>Ωράριο</h3> 
          <label>Δευ - Τετ - Σαβ: 10:00 - 16:00</label><br></br>
          <label>Τρ - Πεμ - Παρ: 10:00 - 21:00</label>
        </div> 
      </div>
    </header>
  );
};

export default Header;
