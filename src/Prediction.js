import "./Prediction.scss"
import { useState, useEffect } from "react";
import getRandom from "./getRandom";

function Prediction(props) {
    const [prediction, setPrediction] = useState();
    const [progress, setProgress] = useState();
    const [phrases, setPhrases] = useState([]);

    const handleClick = () => {
      setTimeout(() => setPrediction(getRandom(phrases)), 3000); 
      setProgress('prediction-progress-bar');
      setTimeout(() => setProgress (''), 3000);
    };
  
    useEffect(() => {
      async function getList() {
        const response = await fetch(`http://localhost:3005/${props.lang}`);
        const data = await response.json();
        setPhrases(data.map((el) => `\u201C${el.prediction}\u201D`));
      }
      getList();
    }, [props.lang])
  
    return (
      <div className="prediction-wrap">
        <p id="prediction">{prediction}</p>
        <button onClick={handleClick} type="button" id="get-prediction">{props.txtBtn}</button>
        <div className="prediction-progress-wrap">
          <div className={progress}></div>
        </div>
      </div>
    )
}

export default Prediction;