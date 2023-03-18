import { Icon, InlineIcon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ComponentsCss/ThreadCard.css";
import format from "../formatTime";

const ThreadCard = ({
  title,
  content,
  date,
  commentCount = 0,
  username = 0,
  id = null,
}) => {
  const navigate = useNavigate();
  const [formatedDate, setFormatedDate] = useState("");

  useEffect(() => {
    setFormatedDate(format(date));
  }, [date]);
  return (
    <div
      className="thread-card"
      onClick={() => {
        if (id) navigate("/threads/" + id);
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="thread-card-meta">
        <div className="thread-card-meta-item">
          <InlineIcon icon={"carbon:time"} />
          <span>{formatedDate}</span>
        </div>
        <div className="thread-card-meta-item">
          <InlineIcon icon={"carbon:chat"} />
          <span>{commentCount} </span>
        </div>
        <div className="thread-card-meta-item">
          <InlineIcon icon={"carbon:user-avatar"} />
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
