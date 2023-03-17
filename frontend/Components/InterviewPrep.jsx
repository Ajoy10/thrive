import { Icon, InlineIcon } from '@iconify/react';
import clipboardIcon from '@iconify-icons/fa-solid/clipboard';
import circleIcon from '@iconify-icons/fa-solid/circle';

function InterviewPrep() {
  return (
    <div>
      <h2>Interview Prep</h2>
      <p>Anything related to interviews is welcome</p>
      <p><InlineIcon icon={clipboardIcon} /> 20 posts</p>
      <p><InlineIcon icon={circleIcon} /> 5 online</p>
    </div>
  );
}
