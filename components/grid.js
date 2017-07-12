import React from 'react'
import R from 'ramda'

const { map } = R

const Grid = props => {
  const drawCell = cell => {
    return <div 
      className={`fl w2 h2 ba bg-${cell.value}`}
      onClick={e => props.setCellColor(props.currentColor, cell)}
      ></div>
  }
  const drawRow = cols => {
    return <div className="cf">{map(drawCell, cols)}</div>
  }
  return (
    <div>
      {
        map(drawRow, props.board)
      }
    </div>
  )
}

export default Grid