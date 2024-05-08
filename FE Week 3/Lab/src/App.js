import { useState } from 'react';
import './App.css';
import plusImage from './Week 3 Lab img/기분 좋은 팽도리.jpg';
import minusImage from './Week 3 Lab img/기분 나쁜 팽도리.jpg';
import resetImage from './Week 3 Lab img/무념무상 팽도리.jpg';

function App() {
  const [image, setImage] = useState(resetImage);
  const [count, setCount] = useState(0);

  const plus = () => {
    setImage(plusImage);
    setCount(count + 1);
  };
  const minus = () => {
    setImage(minusImage);
    setCount(count - 1);
  };
  const reset = () => {
    setImage(resetImage);
    setCount(0);
  };

  return (
    <div className = "container">
      <img src={image} alt="팽도리 사진" className="imageSpot"/>
      <div className = "counter">
        <p className="currentNumber">{count}</p>
        <div className="buttonGroup">
          <button className="buttons" onClick={plus}>Plus</button>
          <button  className = "buttons" onClick={minus}>Minus</button>
          <button className = "buttons" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;