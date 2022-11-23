import React from 'react';

const EXAMPLE_DATA = [
  { track_name: "Never Really Over - R3HAB Remix", track_artist: "Katy Perry", genre: "Pop", uploadDate: "10/14/2022", spotifyLink: "https://open.spotify.com/track/2OAylPUDDfwRGfe0lYqlCQ" },
  { track_name: "bad guy (with Justin Bieber)", track_artist: "Billie Elish", genre: "pop", uploadDate: "09/30/2022", spotifyLink: "https://open.spotify.com/track/3yNZ5r3LKfdmjoS3gkhUCT" },
  { track_name: "Civil War", track_artist: "Guns N' Roses", genre: "Rock", uploadDate: "09/27/2022", spotifyLink: "https://open.spotify.com/track/0EHzXpyi1swR8sMpbVHcLJ" },
  { track_name: "Gone - The Wild Remix", track_artist: "Charli XCX", genre: "pop", uploadDate: "09/25/2022", spotifyLink: "https://open.spotify.com/track/79zGYOcAe2VmJsyQiJX31a" },
  { track_name: "Silverskin", track_artist: "Sam Feldt", genre: "Latin", uploadDate: "09/20/2022", spotifyLink: "https://open.spotify.com/track/2DMqiPZ8uLE2AtwHLInHOI" },
  { track_name: "Messiah", track_artist: "Klingande", genre: "Latin", uploadDate: "09/12/2022", spotifyLink: "https://open.spotify.com/track/3876zu2BcDL39vLkkJGKLZ" },
  { track_name: "The Box", track_artist: "Roddy Rich", genre: "Rap", uploadDate: "08/28/2022", spotifyLink: "https://open.spotify.com/track/" },
  { track_name: "VIBEZ", track_artist: "DaBaby", genre: "Rap", uploadDate: "07/13/22", spotifyLink: "https://open.spotify.com/track/0fySG6A6qLE8IvDpayb5bM" },
  { track_name: "Paradise City", track_artist: "Guns N' Roses", genre: "Rock", uploadDate: "05/03/2022", spotifyLink: "https://open.spotify.com/track/3YBZIN3rekqsKxbJc9FZko" },
  { track_name: "My Sweet Lord", track_artist: "George Harrison", genre: "Rock", uploadDate: "04/13/2022", spotifyLink: "https://open.spotify.com/track/1chu8wc9zbNqTQ2ahROys1" }
]

const displaySongs = EXAMPLE_DATA.map((song) => {
  return(
      <tr key={song.spotifyLink}>
          <td> {song.track_name} </td>
          <td> {song.track_artist} </td>
          <td> {song.genre} </td>
          <td> {song.uploadDate} </td>
          <td><a href={song.spotifyLink}> Here </a></td>
      </tr>
  )
})

export function Search(props) {
  return (
    <main>
      <section>
        <h1>Search</h1>
          <form className="form-login">
              <input type="text" placeholder="Search.." />
              <button className="btn-new">Find Songs</button>
          </form>
      </section>
      <section>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Song Name<span className={"material-icons"}>sort</span></th>
                <th>Artist<span className={"material-icons"}>sort</span></th>
                <th>Genre<span className={"material-icons"}>sort</span></th>
                <th>Date Added<span className={"material-icons"}>sort</span></th>
                <th>Spotify Link</th>
              </tr>
            </thead>
            <tbody>
              {displaySongs}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}