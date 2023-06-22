import '../../styles/ExtendedWeather.scss';
import 'animate.css';


const ExtendedWeather=({weather,measure,darkTheme})=>{

    const {forecastday}=weather.forecast;
    let extended=forecastday.map((item,i)=>{
        if(i!==0){
            const {maxtemp_c,maxtemp_f,mintemp_c,mintemp_f,condition}=item.day;
            const weekDayArray=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            const date=new Date(item.date);
            let weeekDay=weekDayArray[date.getDay()];
            return (
                <div className="extended_items__item" key={i}>
                    <div className="extended_items__item_title">{weeekDay}</div>
                    <div className="extended_items__item_icon"><img src={condition.icon} alt="" /></div>
                    <div className="extended_items__item_descr">{condition.text.split(' ').slice(0,2).join(' ')}</div>
                    <div className="extended_items__item_temp">{ measure==='C'? `${ maxtemp_c.toFixed(1)}/${mintemp_c.toFixed(1)}°C `: `${ maxtemp_f.toFixed(1)}/${mintemp_f.toFixed(1)}°F `}</div>
                </div>
            )
        }
        return null;
    })


    return (
        <div className={`extended animate__fadeInUp ${darkTheme?'extended_dark':null} `}>
            <div className="extended_header">Extended Forecast</div>
            <div className="extended_items">
               {extended}
            </div>
        </div>
    )   
}

export default ExtendedWeather;