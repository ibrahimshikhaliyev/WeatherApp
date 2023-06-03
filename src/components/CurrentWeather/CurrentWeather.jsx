
import '../../styles/CurrentWeather.scss';
import 'animate.css';   

import {FaWind , FaArrowUp,FaArrowDown} from 'react-icons/fa';


const CurrentWeather=({weather})=>{

    const {current,location}=weather;

    const {cloud,condition,feelslike_c,feelslike_f ,gust_kph,gust_mph,humidity,pressure_in,pressure_mb,temp_c,temp_f,wind_kph,wind_mph}=current;



    return(
        <div className="current animate__fadeInUp">
            <div className="current_header">
                <div className="current_header__title">Current Weather {}</div>
                <div className="current_header__toggle"></div>
            </div>
            <div className="current_display">
                <div className="current_display__temp">
                    <div className="city_name">{location.name}</div>
                    <div className="icon_cont">
                        <div className="icon"><img src={condition.icon} alt="" /></div>
                        <div className="temperature">{temp_c}°</div>
                    </div>
                    <div className="weather_descr">{condition.text}</div>
                </div>
                <div className="current_display__secondary">
                    <div className="feels">Feels like  {feelslike_c}°</div>
                    <div className="upDown">
                        <div className="up"> <FaArrowUp className='arrows'/> {feelslike_c}°</div>
                        <div className="down"><FaArrowDown className='arrows'/> {feelslike_c}°</div>
                    </div>
                    
                    <div className="current_display__secondary_items">
                        <div className="current_display__secondary_items__item">
                            <div className="item_icon">
                            <svg width="12" height="18" viewBox="0 0 12 18"><path d="M12,1a.667.667,0,0,0-.536.272l-.02.026C9.87,3.324,6,9.682,6,13a6,6,0,1,0,12,0c0-3.314-3.861-9.66-5.439-11.693,0,0,0,0,0,0l-.025-.034A.667.667,0,0,0,12,1Zm2.333,13.333a1,1,0,1,1-1,1A1,1,0,0,1,14.333,14.333Z" transform="translate(-6 -1)"></path></svg>
                                
                            </div>
                            <div className="item_text">Humidity</div>
                            <div className="item_value">{humidity}%</div>
                        </div>
                        <div className="current_display__secondary_items__item">
                            <div className="item_icon">
                                <FaWind/>
                            </div>
                            <div className="item_text">Wind</div>
                            <div className="item_value">{gust_kph}kph</div>
                        </div>
                        <div className="current_display__secondary_items__item">
                            <div className="item_icon">
                                <svg width="16.889" height="16.92" viewBox="0 0 16.889 16.92"><path d="M12.444,4A8.46,8.46,0,1,1,4,12.46,8.463,8.463,0,0,1,12.444,4ZM13.5,7.173l1.352,1.355-1.88,1.884a2.008,2.008,0,0,0-.528-.066,2.112,2.112,0,0,0-2.111,2.115,2.019,2.019,0,0,0,.066.529L8.948,14.476a2.652,2.652,0,0,0-2.837.595L7.6,16.558a.537.537,0,0,1,.759.76l1.484,1.487a2.663,2.663,0,0,0,.594-2.842l1.484-1.454a2.008,2.008,0,0,0,.528.066,2.112,2.112,0,0,0,2.111-2.115,2.019,2.019,0,0,0-.066-.529l1.88-1.884L17.722,11.4V7.173Z" transform="translate(-4 -4)"></path></svg>
                            </div>
                            <div className="item_text">Pressure</div>
                            <div className="item_value"> {pressure_in}hPa</div>
                        </div>
                    
                    </div>
                </div>

            </div>
        </div>
    )
}


export default CurrentWeather;