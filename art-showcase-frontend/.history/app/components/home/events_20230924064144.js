import React from 'react'

function Events(props) {
  console.log(props.svg)
  return (
    <>
      <button type="button" onClick={onBackClickHandler}>Back</button>
    <main>
      Events
    </main>
    <button type="button" onClick={onForwardClickHandler}>Forward</button>
    </>
  )
}

export default Events