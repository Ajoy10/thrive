import "../ComponentsCss/SearchBar.css";
export default function SearchBar() {
  return (
    <div className="search-bar">
      <h2>Search Topics</h2>
      <input type="text" placeholder="Search Anything..." />
    </div>
  );
}
