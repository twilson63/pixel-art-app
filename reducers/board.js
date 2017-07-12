import R from 'ramda'
const { times, map, equals, and, __, merge } = R

const defaultBoard = times(
  row => times(
    col => ({col, row, value: 'white'})
  , 16),
16)

export default (state=defaultBoard, action) => {
  switch (action.type) {
    case 'CLEAR_CELLS':
      return map(
        map(merge(__, {value: 'white'}))
      )(state)
    case 'SET_CELL':
      return map(
        map(cell => {
          if (
            and(
              equals(cell.row, action.payload.row), 
              equals(cell.col, action.payload.col)
            )
          ) {
            return action.payload
          } else {
            return cell
          }
        }),
      state)
    default:
      return state
  }
}