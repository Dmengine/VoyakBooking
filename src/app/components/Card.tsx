import React from 'react'

interface CardProps {
    text: string;
    Ptext: string;
    cardStyles?: string;
    textStyles?: string;
    h2Style?: string;
    Btext: string;
    Bstyle?: string;
    onClick?: () => void;

}

const Card: React.FC<CardProps> = ({
    text,
    cardStyles = 'bg-customDarkBlue w-[270px] h-[193px] p-4 rounded-[4px]',
    textStyles = 'text-white text-sm font-medium',
    h2Style = 'text-white text-base font-bold mb-3',
    Ptext,
    Btext,
    onClick,
    Bstyle = 'w-[242px] h-[46px] rounded-[4px] bg-blue-500 mt-8'
}) => {
  return (
    <div className={cardStyles}>
        <h2 className={h2Style}>{text}</h2>
        <p className={textStyles}>{Ptext}</p>
        <button onClick={onClick} className={Bstyle}>{Btext}</button>
    </div>
  )
}

export default Card