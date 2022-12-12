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
            <th>Release Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

function SongDataRow({ song }) {
  return(
    <tr key={song.track_id}>
        <td> {song.track_name} </td>
        <td> {song.track_artist} </td>
        <td className='OptionalColumn'> {song.genre} </td>
        <td className='OptionalColumn'> {song.danceability} </td>
        <td><a href={"https://open.spotify.com/track/"+song.track_id}> Here </a></td>
    </tr>
)
}
