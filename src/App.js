import './App.css';
import './style.css';
import myimage from './TR4wp3g5bUSPcwpeUiohUU.jpg';

function App() {
  return (
    <>
    <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Baha Miled</h1>

</div>

<img src="/tupeuxpas_5dc983e67f0ed.jpg" >

</img>

<img src={myimage} alt="car" >

</img>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" ></source>

</video>
    </>
  );
}

export default App;
