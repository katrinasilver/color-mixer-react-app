import React from 'react'
import { connect } from 'react-redux'
import { selectColor } from '../actions/colors'

const ColorList = ({ colors, dispatch }) => {
  console.log(colors)

  const lis = colors.map((color, i) => {
    const style = { backgroundColor: color.selected ? color.value : 'white' }
    return <li
      className="list-group-item text-dark"
      key={ i }
      style={ style }
      onClick={() => dispatch(selectColor(i)) }>{ color.name }</li>
  })

  return <ul className="list-group">{ lis }</ul>
}

// these become props in your component
const mapStateToProps = (state) => {
  return { colors: state.colors }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorList)
