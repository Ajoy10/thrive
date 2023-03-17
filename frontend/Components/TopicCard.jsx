import { Icon, InlineIcon } from '@iconify/react';
import clipboardIcon from '@iconify-icons/fa-solid/clipboard';
import circleIcon from '@iconify-icons/fa-solid/circle';

import "../ComponentsCss/TopicCard.css";

function TopicCard({title, desc, postCount, onlineCount}) {
  return (
    <div className='topic-card'>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="topic-stats">
        <p><InlineIcon icon={clipboardIcon} /> {postCount} posts</p>
        <p><InlineIcon icon={circleIcon} /> {onlineCount} online</p>
      </div>
    </div>
  );
}
