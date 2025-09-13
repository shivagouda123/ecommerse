import React from 'react'

const PropsObject = ( {object} ) => {
  return (
    <div>
        <h1>Name: {object.name}</h1>
        <h1>Age: {object.age}</h1>
    </div>
  )
}

export default PropsObject