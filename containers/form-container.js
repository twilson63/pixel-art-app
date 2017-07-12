import { connect } from 'react-redux'
import R from 'ramda'
import PixelForm from '../components/pixel-form'

const { merge } = R

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(PixelForm)

function mapStateToProps (state) {
  return {
    currentColor: state.currentColor,
    board: state.board
  }
}

function mapActionsToProps (dispatch) {
  return {
    setCellColor: (color, cell) => {
      dispatch({
        type: 'SET_CELL',
        payload: merge(cell, { value: color })
      })
    }
  }
}