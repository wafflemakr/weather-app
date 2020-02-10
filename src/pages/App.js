import React from "react";
import WeatherCard from "../components/WeatherCard";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <WeatherCard city="London" />
        <WeatherCard city="Paris" />
        <WeatherCard city="Tokyo" />
        <WeatherCard city="New York" />
      </Row>
    </Container>
  );
}

export default App;
