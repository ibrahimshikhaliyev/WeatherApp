import { useState,useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Search/Serach';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ExtendedWeather from './components/ExtendedWeather/ExtendedWeather';
import Spinner from './components/Spinner/Spinner';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './styles/App.scss';

function App() {

  const [current,setCurrent]=useState({});
  const [loading,setLoading]=useState(false);


  const handleDataFromChild = (data) => {
    setCurrent({...data});
  };

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className={`App ${Object.keys(current).length === 0 && !loading ? 'App_center-content' :null}`}>
      <div className="container">
        <Navbar/>
        <SearchBar onDataReceived={handleDataFromChild} onLoadingChange={setLoading}/>
        {loading ? <Spinner/>:null}
        {Object.keys(current).length !== 0 && !loading ? <CurrentWeather weather={current}/> : null }
        {Object.keys(current).length !== 0 && !loading ? <ExtendedWeather weather={current}/>  : null }
          

        
      </div>
        
    </div>
  );
}

export default App;
