import React from 'react';

const SupportForm = (props) => {
  const handleClick = () => {
    if (props.handleUndraft) {
      props.handleUndraft(props.player);
    }
  }
  return (
    <li
      onClick={handleClick}>
      {props.player.name ? props.player.name : props.player}
    </li>
  )
}

export default SupportForm;
