import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ImageCard = (val) => {

  const [Count, setCount] = useState(0);
  const clickBtn1 = () => {
    setCount(Count+1)
    console.log(Count);
  }

  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={val.imgsrc} />
    <Card.Body>
      <Card.Title>{val.title}</Card.Title>
      <Card.Text>
        {val.desc}
      </Card.Text>
      <Button variant="primary" onClick={clickBtn1}>Go Somewhere</Button>
      {Count}
    </Card.Body>
  </Card>
    </div>
  )
}

export default ImageCard
