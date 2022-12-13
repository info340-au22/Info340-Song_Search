import React from 'react';

export function Upload(props) {
    return (
        <main>
            <div className="ms-5 p-3 card bg-dark">
                <form>
                  <label for="songName">Song Name: </label>
                  <input type="text" id="songName" name="songName" /><br/><br/>
                  <label for="artist">Artist: </label>
                  <input type="text" id="artist" name="artist" /><br/><br/>
                  <label for="genre">Genre: </label>
                  <input type="text" id="genre" name="genre" /><br/><br/>
                  <label for="link">Spotify Link: </label>
                  <input type="text" id="link" name="link" /><br/><br/>
                  <input type="submit" />
                </form>
            </div>
        </main>
    )
}
