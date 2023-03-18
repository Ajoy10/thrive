import { Icon } from "@iconify/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar({ username = null }) {
  const navigate = useNavigate();
  return (
    <nav>
      <div
        id="back-button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <Icon icon={"carbon:previous-outline"} />
      </div>
      {username ? (
        <div className="user">{username}</div>
      ) : (
        <Button label={<Link to={"/login"}>Login</Link>} />
      )}
    </nav>
  );
}
