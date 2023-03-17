import { Icon, InlineIcon } from '@iconify/react';
import soccerIcon from '@iconify-icons/emojione/soccer-ball';
import usersIcon from '@iconify-icons/fa-solid/users';

function Football() {
  return (
    <div>
      <h2>Football</h2>
      <p>Want to talk about football? This is the place!</p>
      <p><InlineIcon icon={soccerIcon} /> 100 posts</p>
      <p><InlineIcon icon={usersIcon} /> 25 online</p>
    </div>
  );
}
