import logo from './logo.svg';
import './App.css';
import amazon from '../src/pictures/amazon.png'
import LeftSide from './components/LeftSide';
import ProductData from './components/ProductData';
import RightSide from './components/RightSide';
import { useState } from 'react';

function App() {

  const [watchDisplay, setWatchDisplay] = useState("");
  const [watchColor, setWatchColor] = useState("");

  return (
    <div className="App">
      <div>
        <header id='header'>
          <img src={amazon} id='amazonPic'></img>
        </header>
        <div>
          <h1>Hello</h1>
        </div>
        <div id='content'>
          <LeftSide title={ProductData.title} description={ProductData.description} watchDisplay={watchDisplay} watchColor={watchColor}/>
          <RightSide title={ProductData.title} description={ProductData.description} setWatchDisplay={setWatchDisplay} setWatchColor={setWatchColor}/>
        </div>
      </div>
    </div>
  );
}

export default App;
