import "./Prediction.scss"
import { useState, useEffect } from "react";
import getRandom from "./getRandom";

let phrases = [];

function Prediction(props) {
    const [prediction, setPrediction] = useState();
    const [progress, setProgress] = useState();
    const handleClick = () => {
      setTimeout(() => setPrediction(getRandom(phrases)), 3000); 
      setProgress('prediction-progress-bar');
      setTimeout(() => setProgress (''), 3000);
    };
  
    useEffect(() => {
      async function getList() {
        const response = await fetch('http://localhost:3005');
        const data = await response.json();
        phrases = data.map((el) => el.prediction);
      }
      getList();
    }, [])
  
    return (
      <div className="prediction-wrap">
        <p id="prediction">{prediction}</p>
        <button onClick={handleClick} type="button" id="get-prediction">Получить</button>
        <div className="prediction-progress-wrap">
          <div className={progress}></div>
        </div>
      </div>
    )
}

export default Prediction;