import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  // these become props in your component
  return { colors: state.colors }
}

const ColorList = ({ colors, handleToggleColorSelection }) => {
  console.log('hello');

  const lis = colors.map((color, i) => {
    const style = { backgroundColor: color.selected ? color.value : 'white' }
    return <li
      className="list-group-item text-dark"
      key={ i }
      style={ style }>{ color.name }</li>
  })

  return <ul className="list-group">{ lis }</ul>
}

// export your component with
export default connect(mapStateToProps, null)(ColorList)
