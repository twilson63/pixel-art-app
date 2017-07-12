import React from 'react'

const Current = props => {
  return (
    <div className="w3 h3 ba pa3">
      <div className={`w2 h2 ba bg-${props.currentColor}`} />
    </div>
  )
}

export default Current