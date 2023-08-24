import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ onSearch, logout }) {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <button onClick={logout}>Log Out</button>
      <SearchBar onSearch={onSearch} />
    </div>
  ) : null;
}
