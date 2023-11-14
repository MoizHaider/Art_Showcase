'use client'
import React from 'react'

function Events(props) {
  const onBackClickHandler = ()=>{

  }
  const onForwardClickHandler = ()=>{

  }
  const image = Buffer.from(props.data).toString('base64');
  return (
    <>
      <button type="button" onClick={onBackClickHandler}>Back</button>
    <main>
    <img src={`data:image/svg+xml;base64,${image}`} alt="Next.js logo" />
      Events

    </main>
    <button type="button" onClick={onForwardClickHandler}>Forward</button>
    </>
  )
}

export default Events