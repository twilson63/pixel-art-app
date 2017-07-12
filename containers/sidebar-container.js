import { connect } from 'react-redux'

import Sidebar from '../components/sidebar'

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Sidebar)

function mapStateToProps (state) {
  return {
    currentColor: state.currentColor
  }
}

function mapActionsToProps (dispatch) {
  return {
    handleChange: color => e => {
      dispatch({type: 'SET_COLOR', payload: color })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR_CELLS'
      })
    }
  }
}