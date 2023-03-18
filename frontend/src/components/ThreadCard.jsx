import { Icon, InlineIcon } from '@iconify/react';
import "../ComponentsCss/TopicCard.css";

 const ThreadCard = ({ title, content, date, commentCount, username }) => {
    return (
      <div className="thread-card">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="thread-card-meta">
          <div className="thread-card-meta-item">
          <InlineIcon icon={"carbon:time"} />
            <span>{date}</span>
          </div>
          <div className="thread-card-meta-item">
          <InlineIcon icon={"carbon:chat"} />
            <span>{commentCount}</span>
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