import React from 'react'

interface ButtonProps {
    children: string
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button : React.FC<ButtonProps> = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`w-[270px] h-[84px] text-xl rounded-[16px] border-4 border-customBlue font-semibold ${className}`}>
      {children}
    </button>
  )
}

export default Button
