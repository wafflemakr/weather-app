import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "../axios";

export default function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/", {
          params: {
            q: city,
            appid: process.env.REACT_APP_APPID
          }
        });
        console.log(res);
        setWeather({
          description: res.data.weather[0].description,
          temp: res.data.main.temp - 273.15
        });
      } catch (error) {}
    };
    fetchData();
  }, [city]);

  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Body>
        {weather ? (
          <>
            <Card.Title style={{ fontWeight: "bold" }}>{city}</Card.Title>
            <Card.Text>Temperature: {weather.temp.toFixed(2)} °C</Card.Text>
            <Card.Text>Weather: {weather.description}</Card.Text>
          </>
        ) : (
          <h4>Loading {city} weather data...</h4>
        )}
      </Card.Body>
    </Card>
  );
}
