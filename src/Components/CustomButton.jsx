import React from 'react'

const CustomButton = ({children, className}) => {
  return (
    <div>
      <button className={`bg-[#DB4444] text-white py-3 px-13 rounded-sm ${className}`}>
        {children}
      </button>
    </div>
  )
}

export default CustomButton
