import React, { useState, useEffect } from 'react';

import { getDatabase, ref, onValue } from 'firebase/database';


export default function SearchResults(props) {


  let rows = props.data.map((track) => {
    return <SongDataRow song={track} />
  });

  if (rows.length === 0) {
    return <h3 className='text-center text-light'>No Results</h3>
  }

  return (
    <div className="mx-4">
      <table className="table">
        <thead>
          <tr>
            <th>Song Title</th>
            <th>Artist Name</th>
            <th>Genre</th>
            <th>Length</th>
            <th>Spotify Link</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

function millisToMinutes(millis) {
  var min = Math.floor(millis / 60000);
  var sec = ((millis % 60000) / 1000).toFixed(0);
  return min + ":" + (sec < 10 ? '0' : '') + sec;
}

function SongDataRow({ song }) {
  return(
    <tr key={song.track_id}>
        <td> {song.track_name} </td>
        <td> {song.track_artist} </td>
        <td className='OptionalColumn'> {song.genre} </td>
        <td className='OptionalColumn'> {millisToMinutes(song.duration_ms)} </td>
        <td><a href={"https://open.spotify.com/track/"+song.track_id}> Here </a></td>
    </tr>
  );
}
