import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import {Burger} from './Burger.js';


export function Header(props) {
  const location = useLocation();
  const currentUser = props.currentUser;

  function displayHeaderText() {
    if (location.pathname === "/home") {
      return(
        <div>
          <h1> Song Search </h1>
          <h3> The perfect way to find new music so you can groove!</h3>
        </div>
      )
    } else if (location.pathname === "/recent") {
      return (
      <div>
        <h1>Browse New Uploaded Songs!</h1>
        <h3> This is a list of songs our sites users have uploaded!</h3>
      </div>
      )
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
    } else if (location.pathname === "/login") {
      return(<h1 className='pt-6'>Login in or Create an account here to upload your own music! </h1>)
    }
    }

    const handleSignOut = (event) => {
      console.log("signing out");
      signOut(getAuth())
    }  

  return (
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
              {currentUser.userId && 
                <li><button onClick={handleSignOut}>Sign Out</button></li>
              }
              {!currentUser.userId &&
                <li><NavLink to="/login"> Login </NavLink></li>
              }
            </ul>
          </nav>
      {displayHeaderText()}
    </header>
  )
}