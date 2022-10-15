function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="search-container">
         <div className="search-bar">
        <label htmlFor="search">Search Vehicles Category <span id="icons">🕵️‍♂️</span></label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      </div>
     
    );
  }
  
  export default Search;