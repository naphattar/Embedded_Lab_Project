/** @format */

import "./Pm25Display.css";
import image from "../../assets/pm25Icon.png";
import border from "../../assets/humidityBarBorder.png";

function Pm25Display(props) {
  const pm25 = (props.pm / 100) * 180;
  const firstHalf = Math.min(pm25, 150);
  const secondHalf = pm25 > 150 ? 330 : 330 + pm25 - 150;
  const progressBar1 = {
    backgroundImage: `linear-gradient(${firstHalf}deg, gray 50%, transparent 50%),
                     linear-gradient(${secondHalf}deg, transparent 50%, gray 50%)`,
  };
  const progressBar2 = {
    backgroundImage: `linear-gradient(90deg, transparent 50%, #EEFCF2 50%),
                    linear-gradient(${firstHalf}deg, gray 50%, transparent 50%)`,
  };
  const style = pm25 > 90 ? progressBar1 : progressBar2;
  return (
    <div class="Pm25Display">
      <h1>PM 2.5</h1>
      <img class="icon" src={image} alt="pm25Icon" />
      <div style={style} class="Pm25BarBorder">
        <div class="Pm25BarCover"></div>
      </div>

      <p>{props.pm} µg/m³</p>
    </div>
  );
}

export default Pm25Display;
