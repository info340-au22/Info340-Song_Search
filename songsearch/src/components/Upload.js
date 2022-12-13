import React from 'react';

export function Upload(props) {
    return (
        <main>
            <div className="ms-5">
                <form>
                  <label for="songName" style="color:white" style="font-size:300%;">Song Name:</label>
                  <input type="text" id="songName" name="songName"><br><br>
                  <label for="artist" style="color:white" style="font-size:300%;">Artist:</label>
                  <input type="text" id="artist" name="artist"><br><br>
                  <label for="genre" style="color:white" style="font-size:300%;">Genre:</label>
                  <input type="text" id="genre" name="genre"><br><br>
                  <label for="link" style="color:white" style="font-size:300%;">Spotify Link:</label>
                  <input type="text" id="link" name="link"><br><br>
                  <input type="submit">
                </form>
            </div>
        </main>
    )
}
