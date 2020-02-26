import React from 'react'
import { connect } from 'react-redux'

const resetter = (props) => {
  return (
    <div className="unit">
      <h3>Resetter</h3>
      <button onClick={props.reset}>reset</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch({ type: 'RESET' })
    }
  }
}

const Resetter = connect(null, mapDispatchToProps)(resetter)

export default Resetter