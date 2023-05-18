import "./HumidityDisplay.css";
import image from "../../assets/humidityIcon.png";
import border from "../../assets/humidityBarBorder.png";


function HumidityDisplay() {
    return (
        <div class="HumidityDisplay">
            <h1>Humidity</h1>
            <img class="icon" src={image} alt="humidityIcon" />
            <img class="humidityBarBorder" src={border} alt="border" />

            <p>100%</p>

        </div>
    );
}

export default HumidityDisplay;