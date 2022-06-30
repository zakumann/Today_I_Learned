import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import { Container } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {ClipLoader} from 'react-spinners';

const API_KEY = '0639bdfec75e35b7817d78b6b2ca0ef3';
const cities = ['paris', 'new york', 'tokyo', 'seoul'];

const App = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState('');

  const getWeatherByCurrentLocation = async (lat, lon) => {
    console.log('현재 위치', lat, lon);
    try {
      let url = //units=metric 캘빈을 섭씨로
        // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      `http://api.openweathermap.org/data/2.5/weather?lat=35.87222&lon=128.60250&appid=0639bdfec75e35b7817d78b6b2ca0ef3`;
      //&units=metric
        const res = await fetch(url);
        const data = await res.json();
        setWeather(data);
        setLoading(false);
        } catch (err) {
          setAPIError(err.message);
          setLoading(false);
        }
      };

      const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          getWeatherByCurrentLocation(latitude, longitude);
          //console.log('현재위치?', latitude, longitude);
        });
      };

      const getWeatherByCity = async () => {
        try {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
          //&units=metric
          const res = await fetch(url);
          const data = await res.json();
          setWeather(data);
          setLoading(false);
         } catch (err) {
          console.log(err);
          setAPIError(err.message);
          setLoading(false);
        }
      };

      useEffect(() => {
        if (city == null) {
          setLoading(true);
          getCurrentLocation();
        } else {
          setLoading(true);
          getWeatherByCity();
        }
      }, [city]);

      const handleCityChange = (city) => {
        if (city === 'current') {
          setCity(null);
        } else {
          setCity(city);
        }
      };

  return (
    <Container className="vh-100">
      {loading ? (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
         <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
        ) : !apiError ? (
          <div class="main-container">
          <WeatherBox weather={weather} />
          <WeatherButton
           cities={cities}
           handleCityChange={handleCityChange}
           selectedCity={city}
          />
        </div>
        ) : (
          apiError
        )}
      </Container>
  );
};

export default App;
