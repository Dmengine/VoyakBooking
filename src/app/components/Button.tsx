import React from 'react'

interface ButtonProps {
  text: string;
  buttonStyles?: string;
  onClick?: () => void; // Add the onClick prop
}

export const Button: React.FC<ButtonProps> = ({
  text,
  buttonStyles,
  onClick, // Destructure the onClick prop
}) => {
  return (
    <button className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  )
}
