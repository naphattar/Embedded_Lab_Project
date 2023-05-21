/** @format */

import "./Co2Display.css";
import image from "../../assets/co2Icon.png";
import border from "../../assets/humidityBarBorder.png";

function Co2Display(props) {
  const gas = (props.gas / 100) * 180;
  const firstHalf = Math.min(gas, 150);
  const secondHalf = gas > 150 ? 330 : 330 + gas - 150;
  const progressBar1 = {
    backgroundImage: `linear-gradient(${firstHalf}deg, gray 50%, transparent 50%),
                       linear-gradient(${secondHalf}deg, transparent 50%, gray 50%)`,
  };
  const progressBar2 = {
    backgroundImage: `linear-gradient(90deg, transparent 50%, #EEFCF2 50%),
                      linear-gradient(${firstHalf}deg, gray 50%, transparent 50%)`,
  };
  const style = gas > 90 ? progressBar1 : progressBar2;
  return (
    <div class="Co2Display">
      <h1>CO₂</h1>
      <img class="icon" src={image} alt="co2Icon" />
      <div style={style} class="Co2BarBorder">
        <div class="Co2BarCover"></div>
      </div>

      <p>{props.gas} ppm</p>
    </div>
  );
}

export default Co2Display;
