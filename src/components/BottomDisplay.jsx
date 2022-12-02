import React from "react"
import { Row, Col } from "react-bootstrap"

export default function BottomDisplay({ main }) {
  return (
    <Row className=" mb-5 p-1 bottom">
      <Col
        xs={12}
        className="d-flex justify-content-center align-items-center "
      >
        <div className="feels mr-3">
          {main ? <p>{main.feels_like}°C</p> : null}
        </div>
        <div className="humidity ml-3">
          {main ? <p>{main.humidity}%</p> : null}
        </div>
      </Col>
    </Row>
  )
}
