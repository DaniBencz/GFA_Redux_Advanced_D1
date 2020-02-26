import React from 'react'
import { connect } from 'react-redux'

const decreaser = (props) => {
  return (
    <div className="unit">
      <h3>Decreaser</h3>
      <div>
        {props.counter}
      </div>
      <button onClick={props.decrease}>decrease</button>
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
    decrease: () => {
      dispatch({ type: 'DECREASE' })
    }
  }
}

const Decreaser = connect(mapStateToProps, mapDispatchToProps)(decreaser)

export default Decreaser