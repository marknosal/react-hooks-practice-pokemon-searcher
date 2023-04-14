import React from "react";

function Search({ onSearch, searchInput }) {

  function handleInput(event) {
    onSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleInput} value={searchInput} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
