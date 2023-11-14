import React from 'react'

function Events(props) {
  console.log(props)
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