import React from "react"
import { Row, Col } from "react-bootstrap"

export default function BottomDisplay() {
  return (
    <Row className="bottom mb-5">
      <Col xs={12}>
        <div className="feels">
          <p>Feels Like: 5°C</p>
        </div>
        <div className="humidity">
          <p>94%</p>
        </div>
      </Col>
    </Row>
  )
}
