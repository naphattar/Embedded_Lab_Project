/** @format */

import "./HumidityDisplay.css";
import image from "../../assets/humidityIcon.png";
import border from "../../assets/humidityBarBorder.png";

function HumidityDisplay(props) {
  const humid = {
    "--value": props.humid,
  };
  return (
    <div class="HumidityDisplay">
      <h1>Humidity</h1>
      <img class="icon" src={image} alt="humidityIcon" />
      <div style={humid} class="humidityBarBorder">
        {/* <div class="humidityBarCover"></div> */}
      </div>

      <p>{props.humid}%</p>
    </div>
  );
}

export default HumidityDisplay;
