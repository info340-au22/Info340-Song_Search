import React from 'react';

export function Header(props) {
  const currentPage = props.currentPage;
  function displayHeaderText() {
    if (currentPage === "HomePage") {
      return(
        <div>
          <h1> Song Search </h1>
          <h3> The perfect way to find new music so you can groove!</h3>
        </div>
      )
    } else if (currentPage==="NewlyUploaded") {
      return <h1>Browse New Uploaded Songs!</h1>
    }
  }

  return(
    <header>
        <nav>
            <div className="burger">
              <a href="#" className="icon"><span className="material-icons">menu</span></a>
              <a href="index.html" className="title"> Song Search </a>
            </div>
            

            <ul className="pagelinks">
              <li><a href="index.html"><span className="material-icons" aria-label="Home">music_note</span></a></li>
              <li><a href="browse.html">Newly Uploaded</a></li>
              <li><a href="upload.html">Upload your Music</a></li>
              <li><a href="search.html">Search</a></li>
              <li><a href="login.html"> Login </a></li>
            </ul>
          </nav>
      {displayHeaderText()}
    </header>
  )
}