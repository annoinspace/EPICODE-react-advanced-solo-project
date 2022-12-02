import React from "react"
import { Row, Col } from "react-bootstrap"

export default function TopDisplay({ name, weather, main, sys }) {
  return (
    <Row className="top mt-5">
      <Col xs={12}>
        <p>
          {sys ? (
            <p>
              {" "}
              {name}, {sys.country}
            </p>
          ) : null}
        </p>
        <div className="temperature">
          {main ? <h1>{main.temp}°C</h1> : null}
        </div>
        <div className="description">
          {weather ? <p>{weather[0].description}</p> : null}
        </div>
      </Col>
    </Row>
  )
}
