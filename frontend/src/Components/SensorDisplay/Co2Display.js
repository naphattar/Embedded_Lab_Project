/** @format */

import "./Co2Display.css";
import image from "../../assets/co2Icon.png";
import border from "../../assets/humidityBarBorder.png";

function Co2Display(props) {
  const gas = {
    "--value": (props.gas / 2000) * 100,
  };

  return (
    <div class="Co2Display">
      <h1>CO/Alcohol/Hydrogen/Ammonia/Methane</h1>
      <img class="icon" src={image} alt="co2Icon" />
      <div style={gas} class="Co2BarBorder">
        {/* <div class="Co2BarCover"></div> */}
      </div>

      <p>{props.gas} ppm</p>
    </div>
  );
}

export default Co2Display;
