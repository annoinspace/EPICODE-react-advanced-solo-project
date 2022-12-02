import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import React from "react"

export default function MainSearch() {
  //using london as the city for now, will change it to dynamic input later

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=8c1b60ad01126a2d8883709df2ba5cdc`
  return (
    <>
      <Container className="h-100 d-flex flex-column justify-content-between">
        <Row className="top">
          <Col xs={12}>
            <p>London</p>
            <div className="temperature">
              <h1>7°C</h1>
            </div>
            <div className="description">
              <p>A little bit of fog on the horizon</p>
            </div>
          </Col>
        </Row>
        <Row className="bottom">
          <Col xs={12}>
            <p>Lower Display</p>
            <div className="feels">
              <p>Feels Like: 5°C</p>
            </div>
            <div className="humidity">
              <p>94%</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
