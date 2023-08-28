
import './App.css';
import React from 'react';
import AComponent from './AComponent';
// import ReverseProps from './ReverseProps';
// import NavBar from './NavBar';
// import HomeCarsouel from './HomeCarsouel';
// import ImageCard from './ImageCard';
// import { useEffect, useState } from 'react';
// import imagedata from './imagedata';

// const ncard = (val) => {
//   return <ImageCard key={val.id} title={val.title} imgsrc={val.url} desc={val.desc} />
// }


function App() {

  // const [Data, setData] = useState([]);

  // useEffect(() =>{
  //   const fetchdata = async () =>{
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/photos/')
  //       const data = await response.json();
  //       setData(data)
  //     }
  //     catch(error) {
  //       console.log("Error occured", error);
  //     }
  //   }
  //   fetchdata();
  // }, []);

  return (
  // <div>
//       <NavBar />
//       <HomeCarsouel />
//       <div className="row">
//         {Data.map((val, index) => (   // here imagedata is a variable name
//           <div key={val.id} className="col-md-3">{ncard(val)}</div>
//             ))}
//       </div>
    // </div>

    // <div>
    //   <ReverseProps/>
    // </div>

    <div>
      <AComponent />
    </div>
  )
}

export default App;
