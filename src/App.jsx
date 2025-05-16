import { useState, useEffect } from 'react'
import Header from './components/Header';
import Map from "./components/Map";

import './App.css'


function App() {
  const [ipData, setIpData] = useState(null);

  const fetchIpData = async (ipOrDomain = "") => {
    try {
      const baseUrl = "https://geo.ipify.org/api/v2/country,city";
      const apiKey = "at_XMPeu6nIHnooSDsPwC7joJJzgx0Vr";

      const url = `${baseUrl}?apiKey=${apiKey}&ipAddress=${ipOrDomain}&domain=${ipOrDomain}`
      const response = await fetch(url);
      const data = await response.json();

      setIpData(data);
    } catch(error) {
      console.error("Erro ao buscar dados de IP:", error);
    }
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  return (
    <div className='app'>
      <Header onSearch={fetchIpData} ipData={ipData}/>
      {ipData && <Map lat={ipData.location.lat} lng={ipData.location.lng} />}     
    </div>
  )
}

export default App;
