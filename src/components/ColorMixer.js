import { mix } from 'ryb-color-mixer'
import { connect } from 'react-redux'
import React from 'react'

const ColorMixer = ({ colors }) => {
  const selected = colors.filter(color => color.selected).map(color => color.value)
  const backgroundColor = selected.length ? `#${mix(selected)}` : ''
  return (
    <section style={{ height: '20vh', backgroundColor }} className="border rounded"></section>
  )
}

const mapStateToProps = (state) => {
  return { colors: state.colors }
}

export default connect(mapStateToProps, null)(ColorMixer)
