/** @format */

import "./HumidityDisplay.css";
import image from "../../assets/humidityIcon.png";
import border from "../../assets/humidityBarBorder.png";

function HumidityDisplay(props) {
  const humid = (props.humid / 100) * 180;
  const firstHalf = Math.min(humid, 150);
  const secondHalf = humid > 150 ? 330 : 330 + humid - 150;
  const progressBar1 = {
    backgroundImage: `linear-gradient(${firstHalf}deg, #74CBF3 50%, transparent 50%),
                     linear-gradient(${secondHalf}deg, transparent 50%, #74CBF3 50%)`,
  };
  const progressBar2 = {
    backgroundImage: `linear-gradient(90deg, transparent 50%, #EEFCF2 50%),
                    linear-gradient(${firstHalf}deg, #74CBF3 50%, transparent 50%)`,
  };
  const style = humid > 90 ? progressBar1 : progressBar2;
  return (
    <div class="HumidityDisplay">
      <h1>Humidity</h1>
      <img class="icon" src={image} alt="humidityIcon" />
      <div style={style} class="humidityBarBorder">
        <div class="humidityBarCover"></div>
      </div>

      <p>{props.humid}%</p>
    </div>
  );
}

export default HumidityDisplay;
