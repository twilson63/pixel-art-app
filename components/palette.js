import React from 'react'

const Palette = props => {
  return (
    <div className="w3 pa3">
      <div className="w2 h2 ba bg-white" 
           onClick={props.onChange('white')} />
      <div className="w2 h2 ba bg-red"
           onClick={props.onChange('red')} />
      <div className="w2 h2 ba bg-orange"
           onClick={props.onChange('orange')} />
      <div className="w2 h2 ba bg-yellow"
           onClick={props.onChange('yellow')} />
      <div className="w2 h2 ba bg-green"
           onClick={props.onChange('green')} />
      <div className="w2 h2 ba bg-blue"
           onClick={props.onChange('blue')} />
      <div className="w2 h2 ba bg-purple"
           onClick={props.onChange('purple')} />
      <div className="w2 h2 ba bg-black"
           onClick={props.onChange('black')} />

    </div>
  )
}

export default Palette