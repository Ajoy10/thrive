import "../ComponentsCss/button.css";
import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      <InlineIcon icon={"carbon:user-avatar"} />
      {label}
    </button>
  );
};

export default Button;
