import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";

const ReplyCard = ({ title, content, date, commentCount }) => {
  const [reply, setReply] = useState("");

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleAddReply = () => {
    // Do add reply or comment or something
    console.log(reply);
  };

  return (
    <div className="reply-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="meta">
        <div className="reply-card-meta-item">
          <InlineIcon icon={"carbon:time"} />
          <span>{date || "Today"}</span>
        </div>
        <div className="reply-card-meta-item">
          <InlineIcon icon={"carbon:chat"} />
          <span>{commentCount || 0}</span>
        </div>
      </div>
      <textarea
        rows="5"
        cols="10"
        value={reply}
        onChange={handleReplyChange}
        placeholder="Add your reply here"
      />
      <button onClick={handleAddReply}>Add Reply</button>
    </div>
  );
};

export default ReplyCard;
