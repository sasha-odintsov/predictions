import "./Prediction.scss"
import { useState, useEffect } from "react";
import getRandom from "./getRandom";

let phrases = [];

function Prediction(props) {
    const [prediction, setPrediction] = useState();
  
    useEffect(() => {
      async function getList() {
        const response = await fetch('http://localhost:3005');
        const data = await response.json();
        console.log(data);
        phrases = data.map((el) => el.prediction);
      }
      getList();
    }, [])
  
    return (
      <div className="prediction-wrap">
        <p id="prediction">{prediction}</p>
        <button onClick={() => setPrediction(getRandom(phrases))} type="button" id="get-prediction">Получить</button>
      </div>
    )
}

export default Prediction;