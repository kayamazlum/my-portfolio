import React, { ReactNode } from 'react'

interface ButtonProps {
    text: string,
    rightIcon?:ReactNode,
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button : React.FC<ButtonProps> = ({text, className, onClick, rightIcon}) => {
  return (
    <button onClick={onClick} className={`w-[270px] h-[84px] text-xl rounded-[16px] border-4 border-customBlue font-semibold
    hover:shadow-lg hover:shadow-customWhite ease-linear hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3
    ${className}`}>
      {text} {rightIcon}
    </button>
  )
}

export default Button
