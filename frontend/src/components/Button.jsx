import "../ComponentsCss/button.css";
import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
const Button = ({ label, onClick, icon, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {icon || <InlineIcon icon={"carbon:user-avatar"} />}
      {label}
    </button>
  );
};

export default Button;
