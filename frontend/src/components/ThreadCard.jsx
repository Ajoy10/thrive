import { Icon, InlineIcon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import "../ComponentsCss/ThreadCard.css";

const ThreadCard = ({
  title,
  content,
  date,
  commentCount = 0,
  username = 0,
  id = null,
}) => {
  const navigate = useNavigate();
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
          <span>{date}</span>
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
