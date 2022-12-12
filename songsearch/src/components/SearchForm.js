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
    <div className="row align-items-center mb-3">
      {/* <div className="col-auto">
        <select onChange={handleGenreChange} value={selectedGenre} id="genreSelect" className="form-select">
          <option value="">Show All Genres</option>
          {optionElems}
        </select>
      </div> */}
      <div className="col-auto">
        <select onChange={handleGenreChange} value={selectedGenre} id="genreSelect" className="form-select">
          <option value="">Show All Genres</option>
          {optionElems}
        </select>
      </div>
      {/* <div className="col-auto">
        <div className="form-check">
          <input onChange={handleRunnerUpsChange} checked={runnerUpsIncluded} id="runnerupCheckbox" type="checkbox" className="form-check-input" />
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div> */}
      <div className="col-auto">
        <button onClick={changeFilter} id="submitButton" type="submit" className="btn btn-warning">Apply Filters</button>
      </div>
    </div>
  );
}