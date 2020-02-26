import React from 'react'
import { connect } from 'react-redux'

const setter = (props) => {
  return (
    <div className="unit">
      <h3>Setter</h3>
      <div>
        {props.counter}
      </div>
      <button onClick={props.set}>set</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    set: () => {
      dispatch({ type: 'SET', amount() })
    }
  }
}

const Setter = connect(mapStateToProps, mapDispatchToProps)(setter)

export default Setter