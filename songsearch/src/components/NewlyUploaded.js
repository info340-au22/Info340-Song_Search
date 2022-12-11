import React, { useState } from 'react';
import _ from 'lodash';


const EXAMPLE_DATA = [
    { track_name: "Never Really Over - R3HAB Remix", track_artist: "Katy Perry", genre: "Pop", uploadDate: "10/14/2022", spotifyLink: "https://open.spotify.com/track/2OAylPUDDfwRGfe0lYqlCQ" },
    { track_name: "Bad guy (with Justin Bieber)", track_artist: "Billie Elish", genre: "pop", uploadDate: "09/30/2022", spotifyLink: "https://open.spotify.com/track/3yNZ5r3LKfdmjoS3gkhUCT" },
    { track_name: "Civil War", track_artist: "Guns N' Roses", genre: "Rock", uploadDate: "09/27/2022", spotifyLink: "https://open.spotify.com/track/0EHzXpyi1swR8sMpbVHcLJ" },
    { track_name: "Gone - The Wild Remix", track_artist: "Charli XCX", genre: "pop", uploadDate: "09/25/2022", spotifyLink: "https://open.spotify.com/track/79zGYOcAe2VmJsyQiJX31a" },
    { track_name: "Silverskin", track_artist: "Sam Feldt", genre: "Latin", uploadDate: "09/20/2022", spotifyLink: "https://open.spotify.com/track/2DMqiPZ8uLE2AtwHLInHOI" },
    { track_name: "Messiah", track_artist: "Klingande", genre: "Latin", uploadDate: "09/12/2022", spotifyLink: "https://open.spotify.com/track/3876zu2BcDL39vLkkJGKLZ" },
    { track_name: "The Box", track_artist: "Roddy Rich", genre: "Rap", uploadDate: "08/28/2022", spotifyLink: "https://open.spotify.com/track/" },
    { track_name: "VIBEZ", track_artist: "DaBaby", genre: "Rap", uploadDate: "07/13/22", spotifyLink: "https://open.spotify.com/track/0fySG6A6qLE8IvDpayb5bM" },
    { track_name: "Paradise City", track_artist: "Guns N' Roses", genre: "Rock", uploadDate: "05/03/2022", spotifyLink: "https://open.spotify.com/track/3YBZIN3rekqsKxbJc9FZko" },
    { track_name: "My Sweet Lord", track_artist: "George Harrison", genre: "Rock", uploadDate: "04/13/2022", spotifyLink: "https://open.spotify.com/track/1chu8wc9zbNqTQ2ahROys1" }
]


export function NewlyUploaded(props) {
    const [sortByCriteria, sortColumnData] = useState(null);
    const [ascending, setAscending] = useState(null);

    let sortedData = _.sortBy(EXAMPLE_DATA , [sortByCriteria]);
    if (sortByCriteria !== null && ascending !== true) {
        sortedData = _.reverse(sortedData);
    }



    const displaySongs = sortedData.map((song) => {
        return(
            <tr key={song.spotifyLink}>
                <td> {song.track_name} </td>
                <td> {song.track_artist} </td>
                <td className='OptionalColumn'> {song.genre} </td>
                <td className='OptionalColumn'> {song.uploadDate} </td>
                <td><a href={song.spotifyLink}> Here </a></td>
            </tr>
        )
    })

    const handleClick = (event) => { 
        if (event.currentTarget.name !== sortByCriteria) {
            sortColumnData(event.currentTarget.name);
            setAscending(true);
          } else {
            if (ascending === true) {
              setAscending(false);
            } else {
              setAscending(null);
              sortColumnData(null);
            }
          }
    }


    return (
        <main >
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Song Name
                                <SortButton name="track_name" onClick={handleClick} active={sortByCriteria} ascending={ascending}/>
                            </th>
                            <th>
                                Artist
                                <SortButton name="track_artist" onClick={handleClick} active={sortByCriteria} ascending={ascending}/>
                            </th>
                            <th className='OptionalColumn'>
                                Genre
                                <SortButton name="genre" onClick={handleClick} active={sortByCriteria} ascending={ascending}/>
                            </th>
                            <th className='OptionalColumn'>
                                Date Added
                                <SortButton name="uploadDate" onClick={handleClick} active={sortByCriteria} ascending={ascending}/>
                            </th>
                            <th className='py-3'>Spotify Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displaySongs}
                    </tbody>
                </table>
            </div>

        </main>
    )
}



function SortButton(props) {
    let classList = "material-icons text-light"
    if (props.active === props.name) { 
        classList += " active"
    }
    if (props.ascending) {
        classList += " flip"
    }
  
    return (
      <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
        <span className={classList} aria-label={`sort by ${props.name}`}>sort</span>
      </button>
    );
  }