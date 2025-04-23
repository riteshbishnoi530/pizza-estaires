import React from 'react'

function CustomButton({text, buttonClass}: {text: string, buttonClass: string}) {
  return (
    <button className={`${buttonClass}`}>{text}</button>
  )
}

export default CustomButton