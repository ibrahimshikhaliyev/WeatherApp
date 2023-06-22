import { useState,useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Search/Serach';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ExtendedWeather from './components/ExtendedWeather/ExtendedWeather';
import WholeDay from './components/WholeDay/WholeDay';
import Spinner from './components/Spinner/Spinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import AOS from 'aos';

import 'aos/dist/aos.css';
import './styles/App.scss';
import './styles/darkTheme.scss';
import './styles/responsive.scss';

function App() {
  const [darkTheme,setDarkTheme]=useState(false);
  const [current,setCurrent]=useState({});
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [measure,setMeasure]=useState('C');
  const [city,setCityName]=useState(null);
  
  useEffect(()=>{
    let localDarkTheme=localStorage.getItem('darkTheme');

    if(localDarkTheme!== null){
      localDarkTheme=localStorage.getItem('darkTheme')==='true' ? true:false;
      setDarkTheme(localDarkTheme);
    }
  },[])

  const handleDataFromChild = (data) => {
    setCurrent({...data});
  };

  const handleTempMeasure=(tempMes)=>{
    setMeasure(tempMes);
  }

  useEffect(() => {
    AOS.init();
  }, [])

  const onChangeTheme=(value)=>{
    setDarkTheme(value);
  }


  return (
    <div className={`App ${Object.keys(current).length === 0 && !loading ? 'App_center-content' :null} ${darkTheme?'App_dark':null} `}>
      <div className="container">
        <Navbar darkTheme={darkTheme} onChangeTheme={onChangeTheme}/>
        <SearchBar onSetCityName={setCityName} onDataReceived={handleDataFromChild} onLoadingChange={setLoading} onErrorChange={setError} darkTheme={darkTheme}/>
        {loading &&!error ? <Spinner/>:null}

        {error && !loading ? <ErrorMessage cityName={city}/>:null}
      

        {Object.keys(current).length !== 0 && !loading &&!error ? <CurrentWeather weather={current} handleTempMeasure={handleTempMeasure} darkTheme={darkTheme}/> : null }
        {Object.keys(current).length !== 0 && !loading && !error ?  <WholeDay weather={current} measure={measure} darkTheme={darkTheme} /> : null }

        {Object.keys(current).length !== 0 && !loading &&!error ? <ExtendedWeather weather={current} measure={measure} darkTheme={darkTheme}/>  : null }
          

        
      </div>
        
    </div>
  );
}

export default App;
