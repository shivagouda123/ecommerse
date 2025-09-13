import React from 'react'

const PropsFunction = ({text, handleClick }) => {
  return (
    <div>
        <button onClick={handleClick}>Click here</button>
        <h1>{text}</h1>
    </div>
  )
}

export default PropsFunction