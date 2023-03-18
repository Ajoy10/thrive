import { InlineIcon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../ComponentsCss/SearchBar.css";
export default function SearchBar() {
  const [term, setTerm] = useState("");
  return (
    <div className="search-bar-page">
      <h2>Search Topics</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Any topics..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Link className="button" to={"/search?term=" + term}>
          <InlineIcon icon={"carbon:search"} />
        </Link>
      </div>
    </div>
  );
}
