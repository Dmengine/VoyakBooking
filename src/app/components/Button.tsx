import React from 'react'

interface ButtonProps {
  text: string;
  buttonStyles?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  buttonStyles,
  onClick,
}) => {
  return (
    <button className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  )
}
