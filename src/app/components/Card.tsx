import React from 'react'

const Card = ({ children, className }: any) => {
  return (
    <div className={'p-5 rounded-md shadow-md ' + className}>
      {children}
    </div>
  )
}

export default Card