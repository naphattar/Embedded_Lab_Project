import "./TemperatureDisplay.css";
import image from "../../assets/temperatureIcon.png";


function TemperatureDisplay() {
    return (
        <div class="TemperatureDisplay">
            <h1>Temperature</h1>
            <p>25 ํC</p> 
            <img src={image} alt="temperatureIcon" />
            <div class="temperatureBarBorder"></div>
            <div class="temperatureBarCircle"></div>
            <div class="temperatureBarMeter"></div>

        </div>
    );
}

export default TemperatureDisplay;