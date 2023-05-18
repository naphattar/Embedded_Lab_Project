import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import SensorContainer from './Components/SensorContainer/SensorContainer';
import TemperatureDisplay from './Components/SensorDisplay/TemperatureDisplay';
import HumidityDisplay from './Components/SensorDisplay/HumidityDisplay';
import Pm25Display from './Components/SensorDisplay/Pm25Display';
import Co2Display from './Components/SensorDisplay/Co2Display';
import { useEffect, useState } from 'react';

function App() {
  const[temp,setTemp] = useState(0);
  const[humid,setHumid] = useState(0);
  const[gas,setGas] = useState(0);
  const[pm,setPM] = useState(0);

  const api_url = "https://api.netpie.io/v2/device/shadow/data";
  const authheader = "Device 5dcf389f-09f4-4d43-8b64-420b6225a51e:VGXcwseN1nopCpEvNuXHksL777Tvph6o";

  const getSensordata = () =>{
    fetch(api_url, {
		method: 'GET',
		headers: {
			'Authorization': authheader,
		},
	})
	.then((response) => response.json())
    .then((response) =>{
        setGas(response.data.carbon);
        setHumid(response.data.humidity);
        setPM(response.data.dust);
        setTemp(response.data.temperature);
    })
    .catch((err) =>{
        console.log(err);
    })
     
 };
 useEffect(() =>{
    getSensordata();
 },[])
  return (
    <div className="App">
      <MenuBar/>
      <SensorContainer />
      <TemperatureDisplay temp={temp} />
      <HumidityDisplay humid={humid}/>
      <Pm25Display pm={pm}/>
      <Co2Display gas={gas}/>
    </div>
  );
}

export default App;
