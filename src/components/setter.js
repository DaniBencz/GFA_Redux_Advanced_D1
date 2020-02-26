import React from 'react'
import { connect } from 'react-redux'

const setter = (props) => {

  // useState
  let a = 5

  return (
    <div className="unit">
      <h3>Setter</h3>
      <div>
        <input id="input" onChange={(e) => console.log(e.target.value)}></input>
      </div>
      <button onClick={() => props.set(a)}>set</button>
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
    set: (value) => {
      dispatch({ type: 'SET', amount: value })
    }
  }
}

const Setter = connect(mapStateToProps, mapDispatchToProps)(setter)

export default Setter