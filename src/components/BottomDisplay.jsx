import React from "react"
import { Row, Col } from "react-bootstrap"

export default function BottomDisplay() {
  return (
    <Row className=" mb-5 p-1 bottom">
      <Col
        xs={12}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="feels mr-3">
          <p>Feels Like: 5°C</p>
        </div>
        <div className="humidity ml-3">
          <p>Humidity: 94%</p>
        </div>
      </Col>
    </Row>
  )
}
