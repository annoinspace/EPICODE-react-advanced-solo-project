import React from "react"
import { Row, Col } from "react-bootstrap"

export default function TopDisplay(data) {
  return (
    <Row className="top mt-5">
      <Col xs={12}>
        <p>{data.name}</p>
        <div className="temperature">
          {data.main ? <h1>{data.main.temp}°C</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </Col>
    </Row>
  )
}
