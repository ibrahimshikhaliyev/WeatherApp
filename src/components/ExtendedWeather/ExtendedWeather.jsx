import '../../styles/ExtendedWeather.scss';
import 'animate.css';


import { FaCloud } from 'react-icons/fa';

const ExtendedWeather=({weather})=>{

    const {forecastday}=weather.forecast;
    forecastday.shift();
    let extended=forecastday.map((item,i)=>{
        const {maxtemp_c,maxtemp_f,mintemp_c,mintemp_f,condition}=item.day;
        const weekDayArray=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const date=new Date(item.date);
        let weeekDay=weekDayArray[date.getDay()];
        return (
            <div className="extended_items__item" key={i}>
                <div className="extended_items__item_title">{weeekDay}</div>
                <div className="extended_items__item_icon"><img src={condition.icon} alt="" /></div>
                <div className="extended_items__item_descr">{condition.text.split(' ').slice(0,2).join(' ')}</div>
                <div className="extended_items__item_temp">{maxtemp_c}/{mintemp_c}</div>
            </div>
        )
    })


    return (
        <div className="extended animate__fadeInUp">
            <div className="extended_header">Extended Forecast</div>
            <div className="extended_items">
               {extended}
            </div>
        </div>
    )   
}

export default ExtendedWeather;