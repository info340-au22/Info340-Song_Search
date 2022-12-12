import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

// const EXAMPLE_DATA = [
//   { track_name: "Never Really Over - R3HAB Remix", track_artist: "Katy Perry", genre: "Pop", uploadDate: "10/14/2022", spotifyLink: "https://open.spotify.com/track/2OAylPUDDfwRGfe0lYqlCQ" },
//   { track_name: "bad guy (with Justin Bieber)", track_artist: "Billie Elish", genre: "Pop", uploadDate: "09/30/2022", spotifyLink: "https://open.spotify.com/track/3yNZ5r3LKfdmjoS3gkhUCT" },
//   { track_name: "Civil War", track_artist: "Guns N' Roses", genre: "Rock", uploadDate: "09/27/2022", spotifyLink: "https://open.spotify.com/track/0EHzXpyi1swR8sMpbVHcLJ" },
//   { track_name: "Gone - The Wild Remix", track_artist: "Charli XCX", genre: "Pop", uploadDate: "09/25/2022", spotifyLink: "https://open.spotify.com/track/79zGYOcAe2VmJsyQiJX31a" },
//   { track_name: "Silverskin", track_artist: "Sam Feldt", genre: "Latin", uploadDate: "09/20/2022", spotifyLink: "https://open.spotify.com/track/2DMqiPZ8uLE2AtwHLInHOI" },
//   { track_name: "Messiah", track_artist: "Klingande", genre: "Latin", uploadDate: "09/12/2022", spotifyLink: "https://open.spotify.com/track/3876zu2BcDL39vLkkJGKLZ" },
//   { track_name: "The Box", track_artist: "Roddy Rich", genre: "Rap", uploadDate: "08/28/2022", spotifyLink: "https://open.spotify.com/track/" },
//   { track_name: "VIBEZ", track_artist: "DaBaby", genre: "Rap", uploadDate: "07/13/22", spotifyLink: "https://open.spotify.com/track/0fySG6A6qLE8IvDpayb5bM" },
//   { track_name: "Paradise City", track_artist: "Guns N' Roses", genre: "Rock", uploadDate: "05/03/2022", spotifyLink: "https://open.spotify.com/track/3YBZIN3rekqsKxbJc9FZko" },
//   { track_name: "My Sweet Lord", track_artist: "George Harrison", genre: "Rock", uploadDate: "04/13/2022", spotifyLink: "https://open.spotify.com/track/1chu8wc9zbNqTQ2ahROys1" }
// ]

export function Search(props) {
  const songList = props.songList;

  const ALL_GENRES = Array.from(new Set(songList.map(song => song.genre)));

  let [filteredName, setFilteredName] = useState("");
  let [filteredArtist, setFilteredArtist] = useState("");
  let [filteredGenre, setFilteredGenre] = useState("");

  let displayedData = songList; // change this to the real dataset
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