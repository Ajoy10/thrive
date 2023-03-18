import "../ComponentsCss/button.css"
import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
      <InlineIcon icon={"carbon:user-avatar"} />
    </button>
  );
};

export default Button;
