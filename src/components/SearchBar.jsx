import "../styles/SearchBar.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="Search">
        <label>Search:  </label>
        <input
        type="text"
        placeholder="Search expenses"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar"
        />
    </div>
  );
}

export default SearchBar;