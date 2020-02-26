import React from 'react'
import { connect } from 'react-redux'

const TagJSX = (props) => {

  return (
    <div>
      <h3>Tags</h3>
      {props.tags.map(tag => (
        <div className="tag">{tag}</div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tags: state.tags
  }
}

const Tags = connect(mapStateToProps)(TagJSX)

export default Tags