import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export function Search(props) {
  const songList = props.songList;

  const ALL_GENRES = Array.from(new Set(songList.map(song => song.genre)));

  let [filteredName, setFilteredName] = useState("");
  let [filteredArtist, setFilteredArtist] = useState("");
  let [filteredGenre, setFilteredGenre] = useState("");

  let displayedData = songList;
  if (filteredName !== "") {
    displayedData = displayedData.filter((song) =>
      song.track_name.toLowerCase().includes(filteredName.toLowerCase())
    );
  }
  if (filteredArtist !== "") {
    displayedData = displayedData.filter((song) =>
      song.track_artist.toLowerCase().includes(filteredArtist.toLowerCase())
    );
  }
  if (filteredGenre !== "") {
    displayedData = displayedData.filter((song) => song.genre === filteredGenre);
  }

  function applyFilter(name, artist, genre) {
    setFilteredName(name);
    setFilteredArtist(artist);
    setFilteredGenre(genre);
  }

  return (
    <main>
      <SearchForm genreOptions={ALL_GENRES} applyFilterCallback={applyFilter} />
      <SearchResults data={displayedData} />
    </main>
  )
}