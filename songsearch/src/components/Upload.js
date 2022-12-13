import React from 'react';

export function Upload(props) {
    return (
        <main>
            <div className="ms-5">
                <form>
                  <label for="songName" style="color:white font-size:300%;">Song Name:</label>
                  <input type="text" id="songName" name="songName"></input><br></br>
                  <label for="artist" style="color:white font-size:300%;">Artist:</label>
                  <input type="text" id="artist" name="artist"></input><br></br>
                  <label for="genre" style="color:white font-size:300%;">Genre:</label>
                  <input type="text" id="genre" name="genre"></input><br></br>
                  <label for="link" style="color:white font-size:300%;">Spotify Link:</label>
                  <input type="text" id="link" name="link"></input><br></br>
                  <input type="submit"></input>
                </form>
            </div>
        </main>
    )
}
