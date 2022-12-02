import React from "react"
import { Row, Col } from "react-bootstrap"
import { fromUnixTime } from "date-fns"

export default function BottomDisplay({ main, sys }) {
  let sunrise = fromUnixTime(sys.sunrise)
  let sunset = fromUnixTime(sys.sunset)

  return (
    <Row className=" mb-5 p-1 ">
      <Col xs={12} className="d-flex justfy-content-between">
        <div>
          <p>Sunrise</p>
          {sys ? <p>{sunrise.toLocaleTimeString()}</p> : null}
        </div>
        <div>
          {" "}
          <p>Sunset</p>
          {sys ? <p>{sunset.toLocaleTimeString()}</p> : null}
        </div>
      </Col>
      <Col
        xs={12}
        className="d-flex justify-content-center align-items-center bottom"
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
