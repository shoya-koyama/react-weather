import { useEffect, useState } from 'react'; 
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'; 
const API_KEY_WEATHER = '';
const LAT = '';
const LON = '';

const WeatherViewer = () => { 
    const [weather, setWeather] = useState(null);

    useEffect(() => { 
        fetch(`${WEATHER_API_URL}?lat=${LAT}&lon=${LON}&appid=${API_KEY_WEATHER}&units=metric`)
            .then(res => res.json())
            .then(data => { 
                console.log(data);
                const result = { 
                    icon: data.weather[0].icon, 
                    city: data.name, 
                    main: data.weather[0].main, 
                    temperature: data.main.temp, 
                    humidity: data.main.humidity, 
                    pressure: data.main.pressure 
                };
                setWeather(result);
            })
            .catch(err => { 
                console.log(err);
            }); 
    }, []);

    if (!weather) { 
        return (<div>Now Loading...</div>); 
    }
    
    return ( 
        <div className='row justify-content-center gx-4' style={{padding:20}}> 
            <div className='card mb-3' style={{backgroundColor: 'LightBlue'}}> 
                <div className='row g-0'> 
                    <div className='col-4'> 
                        <img 
                            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} 
                            className='img-fluid rounded-start' 
                            alt="天気" 
                        /> 
                    </div> 
                    <div className='col-8'> 
                        <div className='card-body'> 
                            <h5 className='card-title'>{weather.city}</h5> 
                            <p className='card-text'> 
                                天気** {weather.main} <br/> 
                                気温** {weather.temperature}℃ <br/> 
                                湿度** {weather.humidity}% <br/> 
                                気圧** {weather.pressure} hPa <br/> 
                            </p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default WeatherViewer;