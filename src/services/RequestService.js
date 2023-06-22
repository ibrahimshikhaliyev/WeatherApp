import { useHttp } from "../hooks/http.hook";


const useRequestService=()=> {

    const {loading,error,request} = useHttp();
    const apiKeyForecast = process.env.REACT_APP_BASE_FORECAST_URL;
    const apiKeyCurrent = process.env.REACT_APP_BASE_CURRENT_URL;
  
    
    const getCurrentWeather = async (city) => {
      
      const weather = await request(
        `${apiKeyCurrent}${city}`
      );
      return  weather;
    };

    const getForecast = async (city) => {
      const forecast = await request(
        `${apiKeyForecast}${city}&days=7`
      );
      return  forecast;
    };
    

    return { loading,error,getCurrentWeather,getForecast} ;
}
  
  export default useRequestService;
  