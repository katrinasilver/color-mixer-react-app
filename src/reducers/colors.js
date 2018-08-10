import { TOGGLE_COLOR_SELECTION, ADD_COLOR } from '../actions/colors'

const initial = [
  { value: '#ff0000', name: 'Red', selected: false },
  { value: '#00ff00', name: 'Green', selected: false },
  { value: '#0000ff', name: 'Blue', selected: false }
]

function colors (state=initial, { type, payload }) {
  switch (type) {
    case TOGGLE_COLOR_SELECTION:
      const color = state[payload.index]
      color.selected = !color.selected
      return [ ...state ]
    case ADD_COLOR:
      return [ ...state, { ...payload, selected: false } ]
    default:
      return state
  }
}

export default colors
