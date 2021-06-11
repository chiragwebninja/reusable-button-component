import React, { useState } from 'react';
import './Button.css';

interface ButtonProps {
  type: string;
  value: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  label?: string;
  icon?: string;
  classname?: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    props.type === 'secondary' && setIsLoading(true);
    props && props.onClick && props.onClick(event);
  };

  return (
    <div className="buttonComponent">
      <button
        value={props.value}
        className={props?.classname || 'button'}
        onClick={onClick}
      >
        <span>{props.children}</span>
        <span>
          {props.type === 'primary' && (
            <img src={props.icon} alt={props.icon} width="30" />
          )}
        </span>
        <div>{isLoading && <div className="loading"></div>}</div>
      </button>
    </div>
  );
};

export default Button;
