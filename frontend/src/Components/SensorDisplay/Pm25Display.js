import "./Pm25Display.css";
import image from "../../assets/pm25Icon.png";
import border from "../../assets/humidityBarBorder.png";


function Pm25Display(props) {
    return (
        <div class="Pm25Display">
            <h1>PM 2.5</h1>
            <img class="icon" src={image} alt="pm25Icon" />
            <img class="Pm25BarBorder" src={border} alt="border" />

            <p>{props.pm} µg/m³</p>

        </div>
    );
}

export default Pm25Display;