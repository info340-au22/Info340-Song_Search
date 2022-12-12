import React from 'react';

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
  return (
    <tr key={song.spotifyLink}>
      <td> {song.track_name} </td>
      <td> {song.track_artist} </td>
      <td> {song.genre} </td>
      <td> {song.uploadDate} </td>
      <td><a href={song.spotifyLink}> Spotify </a></td>
    </tr>
  );
}
