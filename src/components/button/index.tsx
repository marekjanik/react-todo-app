import React, { MouseEventHandler } from 'react';
import { FontAwesomeIcon, IconDefinition } from '../../utils/font-awesome';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

type ButtonPropsType = {
  icon: IconDefinition;
  type: ButtonType;
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonPropsType> = ({
  icon,
  type,
  className,
  onClick,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
