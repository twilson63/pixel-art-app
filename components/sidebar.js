import React from 'react'

import Palette from './palette'
import Current from './current-color'

const Sidebar = props => {
  return (
    <div className="center">
      <Palette onChange={props.handleChange} />
      <div>Current</div>
      <Current currentColor={props.currentColor} />
      <div className="mt2">
        <a href="#" onClick={e => props.clear() }>Clear</a>
      </div>
    </div>
  )
}

export default Sidebar