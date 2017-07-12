import React from 'react'

import { TextField, Button } from 'jrs-react-components@2.0.x'
import Grid from './grid'

const PixelForm = props => {
  return (
    <div className="pa2">
      <p>Click on each cell to color the cell the selected color</p>
      <Grid 
        setCellColor={props.setCellColor}
        currentColor={props.currentColor} 
        board={props.board} 
      />
      <hr />
      <TextField 
        label="Name"
      />
      <div className="pt4">
        <Button>Save</Button>
      </div>
    </div>
  )
}

export default PixelForm