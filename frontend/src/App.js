import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import SensorContainer from './Components/SensorContainer/SensorContainer';
import TemperatureDisplay from './Components/SensorDisplay/TemperatureDisplay';
import HumidityDisplay from './Components/SensorDisplay/HumidityDisplay';
import Pm25Display from './Components/SensorDisplay/Pm25Display';
import Co2Display from './Components/SensorDisplay/Co2Display';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <SensorContainer/>
      <TemperatureDisplay/>
      <HumidityDisplay/>
      <Pm25Display/>
      <Co2Display/>
    </div>
  );
}

export default App;
