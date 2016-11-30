import React from 'react';
import join from 'classnames';

export default function Button(props) {
  const className = join('button', props.className, {
    'button--active': props.active
  });

  return (
    <button className={className}>
      {props.children}
    </button>
  );
}
