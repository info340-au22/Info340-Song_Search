import React, { useState } from 'react';
import { getDatabase, ref, onValue, push as firebasePush } from 'firebase/database';


export function Upload(props) {
    const [songName, setSongValue] = useState("");
    const [songArtist, setArtistValue] = useState("");
    const [songGenre, setGenreaValue] = useState("");
    const [songTrackID,setSongTrackID] = useState("");
    const [songDuration, setSongDuration] = useState("");
    


    const songNameChange = (event) => {
        const inputtedValue = event.target.value;
        setSongValue(inputtedValue); //update state and re-render!
    }

    const songArtistChange = (event) => {
        const inputtedValue = event.target.value;
        setArtistValue(inputtedValue); //update state and re-render!
    }

    const songGenreChange = (event) => {
        const inputtedValue = event.target.value;
        setGenreaValue(inputtedValue); //update state and re-render!
    }

    const songTrackChange = (event) => {
        const inputtedValue = event.target.value;
        setSongTrackID(inputtedValue); //update state and re-render!
    }

    const songDurationChange = (event) => {
        const inputtedValue = event.target.value;
        setSongDuration(inputtedValue); //update state and re-render!
    }

    function handleSubmit(event) {
        event.preventDefault();

        const timeInMilis = songDuration * 1000

        const newData = {
            "track_name":songName,
            "track_artist":songArtist,
            "genre":songGenre,
            "track_id":songTrackID,
            "duration_ms":timeInMilis,
            "newlyUploaded":true
        }


        const db = getDatabase(); //"the database"
        const SongsRef = ref(db, 'Songs');
        firebasePush(SongsRef, newData);

        setSongValue("");
        setArtistValue("");
        setGenreaValue("");
        setSongTrackID("");
        setSongDuration("");
    }


    return (
        <main>
            <div className="ms-5 p-3 card bg-dark">
                <form onSubmit={handleSubmit}>
                  <label>Song Name: </label>
                  <textarea className="form-control" type="text" id="songName" name="songName" onChange={songNameChange} placeholder="Enter Song Name" value={songName}></textarea>  <br/><br/> 

                  <label>Artist:</label>
                  <textarea className="form-control" type="text" id="artist" name="artist" onChange={songArtistChange} placeholder="Enter Song Artist" value={songArtist}></textarea>  <br/><br/>

                  <label>Genre: </label>
                  <textarea className="form-control" type="text" id="genre" name="genre" onChange={songGenreChange} placeholder="Enter Song Genre" value={songGenre}></textarea><br/><br/>

                  <label>Spotify Track ID: </label>
                  <textarea className="form-control" type="text" id="link" name="link" onChange={songTrackChange} placeholder="Enter Song Track ID from Spotify" value={songTrackID}></textarea><br/><br/>

                  <label>Duration(seconds) </label>
                  <textarea className="form-control" type="text" id="link" name="link" onChange={songDurationChange} placeholder="Enter Song Duration" value={songDuration}></textarea><br/><br/>

                  <button className="btn btn-secondary" type="submit" disabled={songName === "" || songArtist === "" || songGenre === ""}> Submit </button>
                </form>
            </div>
        </main>
    )
}
