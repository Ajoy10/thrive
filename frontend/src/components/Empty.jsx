import React from "react";

import EmptyIcon from "../empty-icon.svg";

export default function Empty() {
  return (
    <div
      className="empty"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <img src={EmptyIcon} alt="empty" style={{ width: "50%" }} />
      <div className="text" style={{ textAlign: "center" }}>
        Empty!
      </div>
    </div>
  );
}
