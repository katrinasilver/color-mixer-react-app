export const TOGGLE_COLOR_SELECTION = 'TOGGLE_COLOR_SELECTION'
export const selectColor = (index) => {
  return {
    type: TOGGLE_COLOR_SELECTION,
    payload: index
  }
}

export const ADD_COLOR = 'ADD_COLOR'
export const addColor = ({ value, name }) => {
  return {
    type: ADD_COLOR,
    payload: { value, name }
  }
}
