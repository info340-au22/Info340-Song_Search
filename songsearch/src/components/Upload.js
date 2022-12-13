import React, { useState } from 'react';
import { getDatabase, ref, onValue, push as firebasePush } from 'firebase/database';


export function Upload(props) {
    const [songName, setSongValue] = useState("");
    const [songArtist, setArtistValue] = useState("");
    const [songGenre, setGenreaValue] = useState("");
    const [songTrackID,setSongTrackID] = useState("");
    const [songDuration, setSongDuration] = useState("");
    const [allowSubmit, setSubmitAvailable] = useState(true);
    


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


        const newData = {
            "track_name":songName,
            "track_artist":songArtist,
            "genre":songGenre,
            "track_id":songTrackID,
            "duration_ms":songDuration,
            "newlyUploaded":true
        }

        console.log(newData)

        const db = getDatabase(); //"the database"
        const SongsRef = ref(db, 'Songs');
        firebasePush(SongsRef, newData);

        songNameChange("")
    }


    return (
        <main>
            <div className="ms-5 p-3 card bg-dark">
                <form onSubmit={handleSubmit}>
                  <label for="songName">Song Name: </label>
                  <textarea className="form-control" type="text" id="songName" name="songName" onChange={songNameChange}/><br/><br/>

                  <label for="artist">Artist:</label>
                  <textarea className="form-control" type="text" id="artist" name="artist" onChange={songArtistChange}/><br/><br/>

                  <label for="genre">Genre: </label>
                  <textarea className="form-control" type="text" id="genre" name="genre" onChange={songGenreChange}/><br/><br/>

                  <label for="link">Spotify Track ID: </label>
                  <textarea className="form-control" type="text" id="link" name="link" onChange={songTrackChange}/><br/><br/>

                  <label for="link">Duration(min:sec) </label>
                  <textarea className="form-control" type="text" id="link" name="link" onChange={songDurationChange}/><br/><br/>

                  <button className="btn btn-secondary" type="submit" disabled={songName === "" || songArtist === "" || songGenre === ""}> Submit </button>
                </form>
            </div>
        </main>
    )
}
