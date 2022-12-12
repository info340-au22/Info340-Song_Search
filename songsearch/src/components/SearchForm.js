import React, { useState } from 'react';

export default function SearchForm(props) {

  let [selectedName, setSelectedName] = useState("");
  let [selectedArtist, setSelectedArtist] = useState("");
  let [selectedGenre, setSelectedGenre] = useState("");

  function handleNameChange(event) {
    setSelectedName(event.target.value);
  }

  function handleArtistChange(event) {
    setSelectedArtist(event.target.value);
  }

  function handleGenreChange(event) {
    setSelectedGenre(event.target.value);
  }

  function changeFilter() {
    props.applyFilterCallback(selectedName, selectedArtist, selectedGenre);
  }

  const optionElems = props.genreOptions.map((genreName) => {
    return <option key={genreName} value={genreName}>{genreName}</option>
  })

  return (
    <div className="row justify-content-md-center mb-4 mx-auto">
      <div className="col-auto">
        <input onChange={handleNameChange} value={selectedName} placeholder="Song Title" type="text" id="nameSelect" className="form-control" />
      </div>
      <div className="col-auto">
        <input onChange={handleArtistChange} value={selectedArtist} placeholder="Artist Name" type="text" id="artistSelect" className="form-control" />
      </div>
      <div className="col-auto">
        <select onChange={handleGenreChange} value={selectedGenre} id="genreSelect" className="form-select">
          <option value="">Show All Genres</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <button onClick={changeFilter} id="submitButton" type="submit" className="btn btn-primary">Apply Filters</button>
      </div>
    </div>
  );
}