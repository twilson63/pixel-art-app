export default (state='blue', action) => {
  switch(action.type) {
    case 'SET_COLOR':
      return action.payload
    default:
      return state
  }
}