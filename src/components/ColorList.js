import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectColor } from '../actions/colors'

const ColorList = ({ colors, selectColor }) => {
  const lis = colors.map((color, index) => {
    const style = { backgroundColor: color.selected ? color.value : 'white' }
    return <li
      className="list-group-item text-dark"
      key={ index }
      style={ style }
      onClick={ () => selectColor({index}) }>{ color.name }</li>
  })

  return <ul className="list-group">{ lis }</ul>
}

const mapStateToProps = ({ colors }) => ({ colors })
const mapDispatchToProps = dispatch => bindActionCreators({
  selectColor
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ColorList)
