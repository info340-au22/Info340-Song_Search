import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import {Burger} from './Burger.js';


export function Header(props) {
  const location = useLocation();
  function displayHeaderText() {
    if (location.pathname === "/home") {
      return(
        <div>
          <h1> Song Search </h1>
          <h3> The perfect way to find new music so you can groove!</h3>
        </div>
      )
    } else if (location.pathname === "/recent") {
      return <h1>Browse New Uploaded Songs!</h1>
    } else if (location.pathname === "/upload") {
      return(
        <div>
          <h1> Upload your own music here! </h1>
          <h3> Just make sure that you have logged in!</h3>
        </div>
      )
    } else if (location.pathname === "/search") {
      return(
      <div>
          <h1> Search by criteria here! </h1>
          <h3> Filter music to find songs you like!</h3>
      </div>
      )
    }

    }

  return(
    <header>
        <nav>
            <div className="burger">
              <Burger />

              <a href="index.html" className="title"> Song Search </a>
            </div>
            

            <ul className="pagelinks">
              <li><NavLink to="/home"><span className="material-icons" aria-label="Home">music_note</span></NavLink></li>
              <li><NavLink to="/recent">Newly Uploaded</NavLink></li>
              <li><NavLink to="/upload">Upload your Music</NavLink></li>
              <li><NavLink to="/search">Search</NavLink></li>
              <li><NavLink to="/login"> Login </NavLink></li>
            </ul>
          </nav>
      {displayHeaderText()}
    </header>
  )
}