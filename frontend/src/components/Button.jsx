import "../ComponentsCss/button.css"
import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
// const Button = ({ label, onClick }) => {
//   return (
//     <button onClick={onClick}>
//       {label}
//       <InlineIcon icon={"carbon:user-avatar"} />
//     </button>
//   );
// };
const Button = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick}>
      {icon && <i className={icon} />}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;