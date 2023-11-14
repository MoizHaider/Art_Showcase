import React from 'react'

function LoadBtn() {
    const [btnPressed, setBtnPressed] = useState(0)
    const onBtnClickHandler = ()=>{

    }
  return (
    <button type="button" onClick={onBtnClickHandler}>More</button>
  )
}

export default LoadBtn