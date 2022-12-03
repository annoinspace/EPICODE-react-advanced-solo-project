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
  return (
    <Row className="top mt-5">
      <Col xs={12}>
        {/* {weather ? (
          <div className="icon-display mb-2">
            {weather[0].description.includes("cloud") ? (
              <BsFillCloudsFill />
            ) : null}
            {weather[0].description.includes("haze") ? <BsCloudHaze1 /> : null}
            {weather[0].description.includes("clear") ? <BsSun /> : null}
            {weather[0].description.includes("rain") ? <BsCloudRain /> : null}
            {weather[0].description.includes("mist") ? <RiMistFill /> : null}
            {weather[0].description.includes("lightning") ? (
              <BsCloudLightning />
            ) : null}
            {weather[0].description.includes("smoke") ? (
              <BsFillCloudHaze2Fill />
            ) : null}
          </div>
        ) : null} */}
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
          {weather ? <p>{weather[0].description}</p> : null}
        </div>
      </Col>
    </Row>
  )
}
