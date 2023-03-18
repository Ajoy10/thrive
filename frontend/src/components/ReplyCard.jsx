import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";

import "../ComponentsCss/ReplyCard.css";
import format from "../formatTime";

const ReplyCard = ({ title, content, date, commentCount }) => {
  return (
    <div className="reply-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="meta">
        <div className="reply-card-meta-item">
          <InlineIcon icon={"carbon:time"} />
          <span>{format(date) || "Today"}</span>
        </div>
        {/* <div className="reply-card-meta-item">
          <InlineIcon icon={"carbon:chat"} />
          <span>{commentCount || 0}</span>
        </div> */}
      </div>
    </div>
  );
};

export default ReplyCard;
