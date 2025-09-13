import React from 'react'

const PropsList = ({ list }) => {
    const listitems = list.map((item) => (<li key={item}>{item}</li>))
  return (<ol>{listitems}</ol>)
}

export default PropsList