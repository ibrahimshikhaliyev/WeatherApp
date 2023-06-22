import { useState,useRef } from 'react';
import useRequestService from '../../services/RequestService';


import { FaSearch,FaLocationArrow} from 'react-icons/fa';


import '../../styles/Search.scss';

const SearchBar=({ onDataReceived,onLoadingChange,onErrorChange,darkTheme ,onSetCityName})=>{

    const [cityName,setCityName]=useState('');
    const cityNameRef=useRef(null);

    const {getForecast}=useRequestService();
    
    const onUpdateAllProducts=(city)=>{
        onLoadingChange(true);
        getForecast(city)
            .then(data=>{
                onLoadingChange(false);
                onErrorChange(false);
                onSetCityName(cityName);
                setCityName('')
                if(data.error){
                    onErrorChange(true);
                }else{
                    onErrorChange(false);
                    onDataReceived(data);
                }
                
                
            })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {

            onUpdateAllProducts(cityName);
        }
    };
    
    const cityNameValidation=(city)=>{

        if(city.length<3){
            cityNameRef.current.focus();

        }else{
            onUpdateAllProducts(cityName);

        }
    }



    return (
        <div className={`search ${darkTheme?'search_dark':null} `}>
            <div className="search_icon"><FaSearch/></div>
            <input 
                value={cityName} 
                type="text" 
                className="search_input" 
                placeholder='Search City' 
                ref={cityNameRef}
                onChange={e=>
                    setCityName(e.target.value)
                }
                onKeyDown={(e)=>{
                    handleKeyDown(e);
                }}

            />
            <button className="search_location" onClick={e=>{
                cityNameValidation(cityName)
                
            }}><FaLocationArrow/></button>
        </div>
    )
}

export default SearchBar;