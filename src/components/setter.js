import React, { useState } from 'react'
import { connect } from 'react-redux'

const SetterJSX = (props) => {  // to use Hooks, gotta start with capital letter!

  const [amount, setAmount] = useState(0);

  return (
    <div className="unit">
      <h3>Setter</h3>
      <div>
        <input id="input" onChange={(e) => setAmount(e.target.value)}></input>
      </div>
      <button onClick={() => props.set(amount)}>set</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    set: (value) => {
      dispatch({ type: 'SET', amount: value })
    }
  }
}

const Setter = connect(null, mapDispatchToProps)(SetterJSX)

export default Setter