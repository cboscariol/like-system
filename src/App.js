import './App.css';
import { useState } from "react";
import black from './assets/black.svg'
import yellow from './assets/yellow.svg'
import liked from "./assets/like-svgrepo-com.svg";
import dislike from "./assets/dislike-svgrepo-com.svg"
import blackHeart from "./assets/blackHeart.svg"
import redHeart from "./assets/red-heart.svg"


function App() {
  const [star, setStar] = useState(false)
  const [like, setLike] = useState(false)
  const [heart, setHeart] = useState(false)
  const [number, setNumber] = useState()

  function isStar() {
    setStar(!star);
    return;
  }

  function starImage() {
    return star ? yellow : black
  }

  function isHearted() {
    setHeart(!heart);
    return;
  }

  function heartImage() {
    return heart ? blackHeart : redHeart
  }

  function isLike() {
    setLike(!like);
    return;
  }

  function likeImage() {
    return like ? liked : dislike
  }

  function numberState() {
    setNumber(!number)
  }

  function changeNumber() {
    return number ? 0 : 1
  }


  return (
    <div className="App">
      <img src={starImage()} alt="" onClick={isStar} className="imageSize" />
      <button type="button" className="btn btn-primary" onClick={numberState}>{changeNumber()}</button>
      <button type="button" className="btn btn-light imageSize" onClick={isLike}><img src={likeImage()} alt="" /></button>
      <button type="button" className="btn btn-light imageSize" onClick={isHearted}><img src={heartImage()} alt="" /></button>

    </div>
  );
}


export default App;
