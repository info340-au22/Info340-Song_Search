import React from 'react';

export function Header(props) {
    return(
      <header>    
          <nav>   
              <div className="burger">
                <a href="#" className="icon"><span className="material-icons">menu</span></a>
                <a href="index.html" className="title"> Song Search </a>
              </div>
  
              <ul className="pagelinks">
                <li><a href="index.html"><span className="material-icons" aria-label="Home">music_note</span></a></li>
                <li><a href="#">Top Charts</a></li>
                <li><a href="upload.html">Upload your Music</a></li>
                <li><a href="search.html"><span className="material-icons" aria-label="Shuffle Songs">shuffle</span></a></li>
                <li><a href="search.html">Search</a></li>
                <li><a href="login.html"> Login </a></li>
              </ul>
            </nav>

            <h1> Song Search </h1>
            <h3> The perfect way to find new music so you can groove!</h3>
      </header>
    )
}