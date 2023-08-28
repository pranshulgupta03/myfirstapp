import React from 'react'
import ChildComponent from './ChildComponent'
import { useState } from 'react';

const ReverseProps = () => {

    const [data, setdata] = useState([null]);
    const HandleChild = (children)=>{
        setdata(children);
    };

  return (
    <div>
      <ChildComponent 
        onDataFromChild = {HandleChild} />
        <p>{data}</p>
    </div>
  )
}

export default ReverseProps
