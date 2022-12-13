import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { getDatabase, ref, onValue } from 'firebase/database';


export function NewlyUploaded(props) {
    const [sortByCriteria, sortColumnData] = useState(null);
    const [ascending, setAscending] = useState(null);

    const songList = props.songList;

    let newerSongs = songList.filter((thisSong) => {
        if (thisSong.newlyUploaded === true) {
            return thisSong
        }
    })

    let sortedData = _.sortBy(newerSongs , [sortByCriteria]);

    if (sortByCriteria !== null && ascending !== true) {
        sortedData = _.reverse(sortedData);
    }

    function millisToMinutes(millis) {
        var min = Math.floor(millis / 60000);
        var sec = ((millis % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? '0' : '') + sec;
      }


    const displaySongs = sortedData.map((song) => {
        return(
            <tr key={song.track_id}>
                <td> {song.track_name} </td>
                <td> {song.track_artist} </td>
                <td className='OptionalColumn'> {song.genre} </td>
                <td className='OptionalColumn'> {millisToMinutes(song.duration_ms)} </td>
                <td><a href={"https://open.spotify.com/track/"+song.track_id}> Here </a></td>
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
                                Length
                                <SortButton name="duration_ms" onClick={handleClick} active={sortByCriteria} ascending={ascending}/>
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