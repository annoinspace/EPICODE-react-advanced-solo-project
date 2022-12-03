import React from "react"
import { Row, Col } from "react-bootstrap"
import { fromUnixTime } from "date-fns"

export default function BottomDisplay({ main, sys }) {
  //   const newsunrise = fromUnixTime(sys.sunrise)
  //   const newsunset = fromUnixTime(sys.sunset)

  return (
    <Row className=" mb-5 mt-5 p-1 bottom-section">
      <Col xs={12} className="sunrise-wrapper mb-3">
        <div>
          <div>
            <p>Sunrise</p>
          </div>
          {sys ? <p>{fromUnixTime(sys.sunrise).toLocaleTimeString()}</p> : null}
        </div>
        <div>
          <div>
            {" "}
            <p>Sunset</p>
          </div>
          {sys ? <p>{fromUnixTime(sys.sunset).toLocaleTimeString()}</p> : null}
        </div>
      </Col>
      <Col
        xs={12}
        className="d-flex justify-content-center align-items-center bottom"
      >
        <div className="feels mr-1">
          {main ? <p>Feels Like: {main.feels_like.toFixed(1)}°C</p> : null}
        </div>
        <div className="humidity ml-1">
          {main ? <p>Humidity: {main.humidity}%</p> : null}
        </div>
      </Col>
    </Row>
  )
}
