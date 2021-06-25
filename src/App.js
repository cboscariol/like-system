import './App.css';
import { useState } from "react";
import black from './assets/black.svg'
import yellow from './assets/yellow.svg'


function App() {
  const [liked, setLiked] = useState(false)
  const [number, setNumber] = useState()

  function isLiked() {
    setLiked(!liked);
    return;
  }

  function starImage() {
    return liked ? yellow : black
  }

  function numberState() {
    setNumber(!number)
  }

  function changeNumber() {
    return number ? 0 : 1
  }


  return (
    <div className="App">
      <img src={starImage()} alt="" onClick={isLiked} className="imageSize" />
      <button type="button" class="btn btn-primary" onClick={numberState}>{changeNumber()}</button>
    </div>
  );
}


export default App;
