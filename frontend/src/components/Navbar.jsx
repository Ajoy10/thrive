import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navbar({ username = null }) {
  return (
    <nav>
      {username ? (
        <div className="user">{username}</div>
      ) : (
        <Button label={<Link to={"/login"}>Login</Link>} />
      )}
    </nav>
  );
}
