
import './App.css';
import NavBar from './NavBar';
import HomeCarsouel from './HomeCarsouel';
import ImageCard from './ImageCard';
import imagedata from './imagedata';
const ncard = (val) => {
  return <ImageCard key={val.id} title={val.title} imgsrc={val.imgsrc} desc={val.desc} />
}


function App() {
  return (
    <div>
      <NavBar />
      <HomeCarsouel />
      <div className="row">
        {imagedata.map((val, index) => (   // here imagedata is a variable name
          <div key={val.id} className="col-md-3">{ncard(val)}</div>
            ))}
      </div>
    </div>
  );
}

export default App;
