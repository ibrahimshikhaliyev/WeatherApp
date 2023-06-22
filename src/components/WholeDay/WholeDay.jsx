import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Scrollbar } from "swiper";


import '../../styles/WholeDay.scss';
import 'animate.css';   
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation"
import "swiper/css/scrollbar";


import {FaWind,FaChevronLeft,FaChevronRight} from 'react-icons/fa';





const WholeDay=({weather,measure,darkTheme})=>{
    const {hour}=weather.forecast.forecastday[0];
    let hourItem=hour.map((item,i)=>{
        const {time_epoch,temp_c,temp_f,wind_kph,wind_mph,time,condition}=item;
        let itemTime=time.split(' ')[1];
        let dt = Date.now().toString().slice(0, -3);
        
        return( time_epoch +3600 >=dt ?
            <SwiperSlide className="mySwiper_item" key={i}>
                    <div className="hour_temp"> { measure==='C' ?`${temp_c}°C`:`${temp_f}°F` } </div>
                    <div className="hour_icon"><img src={condition.icon} alt="" /></div>
                    <div className="hour_wind">
                        <div className="hour_wind__icon">
                            <FaWind/>
                        </div>
                        { measure==='C' ?`${wind_kph}kPh`:`${wind_mph}mPh` }
                        </div>
                    <div className="hour_time">{time_epoch <=dt ? 'Now' : itemTime}</div>
            </SwiperSlide>:null
        )
        
    })
    

    return (
        <div className={`wholeDay animate__fadeInUp  ${darkTheme?'wholeDay_dark':null}`}>
            <div className="wholeDay_title">24-hour forecast</div>
            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                navigation={{
                    prevEl: '.btn-prev',
                    nextEl: '.btn-next',
                    disabledClass: 'disabled_swiper_button'
                }}
                

                breakpoints={{
                    0:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                        
                    },
                    600: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 7,
                      spaceBetween: 50,
                    },  
                  }}
                modules={[Navigation,Scrollbar]}
                className="mySwiper"
            >

                {hourItem}
                
                <div className="navigation-btn btn-prev"><FaChevronLeft/></div>
                <div className="navigation-btn btn-next"><FaChevronRight/></div>
                {/* <div class="swiper-scrollbar"></div> */}
            </Swiper>
        </div>
    )
}


export default WholeDay;


