import "./Co2Display.css";
import image from "../../assets/co2Icon.png";
import border from "../../assets/humidityBarBorder.png";


function Co2Display() {
    return (
        <div class="Co2Display">
            <h1>CO₂</h1>
            <img class="icon" src={image} alt="co2Icon" />
            <img class="Co2BarBorder" src={border} alt="border" />

            <p>4 ppm</p>

        </div>
    );
}

export default Co2Display;