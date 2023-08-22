import "./Weather.css"
import React, { useState,useEffect} from 'react';

function Weather() {   

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');


    useEffect(() => {
        const apiKey = '2fcb00c0e425fce9f9a5c4b87092ca53';
        const city = 'Thiruvarur'; // Replace with the city name you want to fetch weather for
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setWeatherData(data))
          .catch((error) => console.error('Error fetching weather data:', error));
      }, []);
 

     const  handleSearch = async() => {
        try {
                const apiKey = '2fcb00c0e425fce9f9a5c4b87092ca53';
                               
                const response =  await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            
                )

                const alw =  await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
                
                    )

                const dataAPI = await response.json();
                setWeatherData(dataAPI)
                console.log(weatherData,"response");
        }
        catch(error) {
            console.error('Error fetching weather data:', error);
        }
      }
    

    return (
        <>
            <div className="container">
            <div className="weatherApp">
               <div className="search-input">
               <input type="text"
                placeholder="Enter a City by name"
                value={city} 
                onChange={(e)=>setCity(e.target.value)}/>
                <span style={{padding:'15px'}}>
               <button onClick={handleSearch}><i className="fa fa-search" style={{fontSize:'26px'}}></i>
               </button> 
               </span> 
               </div>
               {weatherData ? (
                <div className="weather-info">
                 {(() => {
                    if (weatherData.weather[0].description === 'overcast clouds') {
                    return (
                        <div><img src="./assets/cloudysun.png" width={'160px'}  height={'160px'}/></div>
                    )
                    } else if (weatherData.weather[0].description === 'broken clouds') {
                    return (
                        <div><img src="./assets/scattering_light.png" width={'160px'}  height={'160px'}/></div>
                    )
                    } else if (weatherData.weather[0].description === 'haze') {
                    return (
                        <div><img src="./assets/sunlight.png" width={'160px'}  height={'160px'}/></div>
                    )
                    }
                    else if (weatherData.weather[0].description === 'mist') {
                        return (
                            <div><img src="./assets/sunlight.png" width={'90px'}  height={'90px'}/></div>
                        )
                    }
                    else if (weatherData.weather[0].description === 'moderate rain') {
                        return (
                            <div><img src="./assets/rain.png" width={'160px'}  height={'160px'}/></div>
                        )
                        }
                })()}
                <h1>{weatherData.main.temp}°C</h1>
                <h2>{weatherData.name}</h2>
                <p>Weather: {weatherData.weather[0].description}</p>
                <div className="additional-detail">
                    <div>
                    <span className="material-icons" style={{fontSize:'35px'}}>water</span>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    </div>
                    <div>
                    <span className="material-icons" style={{fontSize:'35px'}}>air</span> 
                    <p>Wind: {weatherData.wind.speed}Km/hr</p>
                    </div>
                </div>
                </div>
            ) : (
                <p>Loading weather data...</p>
              )}
            </div>
            </div>
        </>
    )

}


export default Weather;