import React from 'react'

const ChildComponent = (onDataFromChild) => {

    const SendDataToParent = () =>{
        const data = "Logged In"
    }

  return (
    <div>
      <div>Child Component</div>
      <button onClick={SendDataToParent}/> Send
    </div>
  )
}

export default ChildComponent
