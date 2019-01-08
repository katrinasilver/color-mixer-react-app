export const ADD_COLOR = 'ADD_COLOR'
export const SELECT_COLOR = 'SELECT_COLOR'

export const addColor = (newColor) => {
  return {
    type: ADD_COLOR,
    payload: newColor
  }
}

export const selectColor = (idx)  =>{
  return {
    type: SELECT_COLOR,
    payload: idx
  }
}
