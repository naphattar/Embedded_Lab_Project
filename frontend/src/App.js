import './App.css';
import NavImage from './Components/NavImage/NavImage';
import Navbar from './Components/Navbar/Navbar';
import MenuBar from './Components/MenuBar/MenuBar';
import SensorContainer from './Components/SensorContainer/SensorContainer';
import TemperatureDisplay from './Components/SensorDisplay/TemperatureDisplay';
import HumidityDisplay from './Components/SensorDisplay/HumidityDisplay';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <MenuBar/>
      {/* <NavImage/> */}
      <SensorContainer/>
      <TemperatureDisplay/>
      <HumidityDisplay/>
    </div>
  );
}

export default App;
