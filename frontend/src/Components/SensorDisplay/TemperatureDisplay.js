/** @format */

import "./TemperatureDisplay.css";
import image from "../../assets/temperatureIcon.png";

function TemperatureDisplay(prop) {
  const temp = (prop.temp / 45) * 100;
  return (
    <div class="TemperatureDisplay">
      <h1>Temperature</h1>
      <p>{prop.temp} ํC</p>
      <img src={image} alt="temperatureIcon" />
      <div class="temperatureBarBorder">
        <div style={{ width: `${temp}%` }} class="temperatureBarMeter"></div>
      </div>
      <div class="temperatureBarCircle"></div>
    </div>
  );
}

export default TemperatureDisplay;
