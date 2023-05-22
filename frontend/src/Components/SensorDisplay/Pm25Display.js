/** @format */

import "./Pm25Display.css";
import image from "../../assets/pm25Icon.png";
import border from "../../assets/humidityBarBorder.png";

function Pm25Display(props) {
  const pm25 = {
    "--value": (props.pm25 / 48) * 100,
  };
  return (
    <div class="Pm25Display">
      <h1>PM 2.5</h1>
      <img class="icon" src={image} alt="pm25Icon" />
      <div class="Pm25BarBorder" style={pm25}>
        {/* <div class="Pm25BarCover"></div> */}
      </div>

      <p>{props.pm} µg/m³</p>
    </div>
  );
}

export default Pm25Display;
