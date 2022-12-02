import React from "react"
import { Row, Col } from "react-bootstrap"

export default function TopDisplay() {
  return (
    <Row className="top mt-5">
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
  )
}
