import { useState } from 'react';
import useRequestService from '../../services/RequestService';


import { FaSearch,FaLocationArrow} from 'react-icons/fa';


import '../../styles/Search.scss';

const SearchBar=({ onDataReceived,onLoadingChange })=>{

    const [cityName,setCityName]=useState('');

    const {getForecast}=useRequestService();
    
    const onUpdateAllProducts=(city)=>{
        onLoadingChange(true);
        getForecast(city)
            .then(data=>{
                    
                onLoadingChange(false);
                setCityName('')
                onDataReceived(data);
                console.log(data)
                
            })
    }



    return (
        <div className="search">
            <div className="search_icon"><FaSearch/></div>
            <input value={cityName} type="text" className="search_input" placeholder='Search City' onChange={e=>
                setCityName(e.target.value)
            }/>
            <button className="search_location" onClick={e=>{
                onUpdateAllProducts(cityName);
                
            }}><FaLocationArrow/></button>
        </div>
    )
}

export default SearchBar;