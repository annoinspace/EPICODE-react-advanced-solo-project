import React from "react"
import { Row, Col } from "react-bootstrap"
import {
  BsFillCloudsFill,
  BsSun,
  BsCloudHaze1,
  BsCloudRain,
  BsCloudLightning,
  BsFillCloudHaze2Fill
} from "react-icons/bs"

import { RiMistFill } from "react-icons/ri"

export default function TopDisplay({ name, weather, main, sys }) {
  const description = weather[0].description

  return (
    <Row className="top mt-5">
      <Col xs={12}>
        <div classname="icon-display mb-2">
          {description.includes("cloud") ? <BsFillCloudsFill /> : null}
          {description.includes("haze") ? <BsCloudHaze1 /> : null}
          {description.includes("clear") ? <BsSun /> : null}
          {description.includes("rain") ? <BsCloudRain /> : null}
          {description.includes("mist") ? <RiMistFill /> : null}
          {description.includes("lightning") ? <BsCloudLightning /> : null}
          {description.includes("smoke") ? <BsFillCloudHaze2Fill /> : null}
        </div>
        <div className="mt-2">
          {sys ? (
            <p>
              {" "}
              {name}, {sys.country}
            </p>
          ) : null}
        </div>
        <div className="temperature">
          {main ? <h1>{main.temp.toFixed(1)}°C</h1> : null}
        </div>
        <div className="description">
          {weather ? <p>{description}</p> : null}
        </div>
      </Col>
    </Row>
  )
}
