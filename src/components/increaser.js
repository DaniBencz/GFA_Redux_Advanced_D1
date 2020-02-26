import React from 'react'
import { connect } from 'react-redux'

const increaser = (props) => {
  return (
    <div className="unit">
      <h3>Increaser</h3>
      <div>
        {props.counter}
      </div>
      <button onClick={props.increase}>Increase</button>
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
    increase: () => {
      dispatch({ type: 'INCREASE' })
    }
  }
}

const Increaser = connect(mapStateToProps, mapDispatchToProps)(increaser)

export default Increaser