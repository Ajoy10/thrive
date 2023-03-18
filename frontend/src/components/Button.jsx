import "../ComponentsCss/button.css";
import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
const Button = ({ label, onClick, icon }) => {
  return (
    <button onClick={onClick}>
      {icon || <InlineIcon icon={"carbon:user-avatar"} />}
      {label}
    </button>
  );
};

export default Button;
