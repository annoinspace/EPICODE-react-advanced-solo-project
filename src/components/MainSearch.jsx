import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import React from "react"
// import TopDisplay from "./TopDisplay"
// import BottomDisplay from "./BottomDisplay"
import { useState } from "react"
import { fromUnixTime } from "date-fns"
import {
  BsFillCloudsFill,
  BsSun,
  BsCloudHaze1,
  BsCloudRain,
  BsCloudLightning,
  BsFillCloudHaze2Fill
} from "react-icons/bs"

import { RiMistFill } from "react-icons/ri"

export default function MainSearch() {
  const [data, setData] = useState("")
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(true)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8c1b60ad01126a2d8883709df2ba5cdc&units=metric`

  const searchLocation = (event) => {
    setLoading(true)
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        console.log(response.data)
        setData(response.data)

        console.log("the location is", location)
      })
      setLocation("")
      setLoading(false)
    }
  }

  //   const newsunrise = fromUnixTime(data.sys.sunrise)
  //   const newsunset = fromUnixTime(data.sys.sunset)

  return (
    <>
      <Container className="h-100 d-flex flex-column justify-content-between align-items-center main">
        <div className="search mt-5">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            placeholder="search ..."
            type="text"
          ></input>
        </div>
        {loading ? (
          <>Loading...</>
        ) : (
          <Row className="top mt-5">
            <Col xs={12}>
              {data.weather ? (
                <div classname="icon-display mb-2">
                  {data.weather[0].description.includes("cloud") ? (
                    <BsFillCloudsFill />
                  ) : null}
                  {data.weather[0].description.includes("haze") ? (
                    <BsCloudHaze1 />
                  ) : null}
                  {data.weather[0].description.includes("clear") ? (
                    <BsSun />
                  ) : null}
                  {data.weather[0].description.includes("rain") ? (
                    <BsCloudRain />
                  ) : null}
                  {data.weather[0].description.includes("mist") ? (
                    <RiMistFill />
                  ) : null}
                  {data.weather[0].description.includes("lightning") ? (
                    <BsCloudLightning />
                  ) : null}
                  {data.weather[0].description.includes("smoke") ? (
                    <BsFillCloudHaze2Fill />
                  ) : null}
                </div>
              ) : null}

              <div className="mt-2">
                {data.sys ? (
                  <p>
                    {" "}
                    {data.name}, {data.sys.country}
                  </p>
                ) : null}
              </div>
              <div className="temperature">
                {data.main ? <h1>{data.main.temp.toFixed(1)}°C</h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.description}</p> : null}
              </div>
            </Col>
          </Row>
        )}

        {/* <BottomDisplay main={data.main} sys={data.sys} /> */}
        {loading ? (
          <>Loading...</>
        ) : (
          <Row className=" mb-5 mt-5 p-1 bottom-section">
            <Col xs={12} className="sunrise-wrapper mb-3">
              <div>
                <div>
                  <p>Sunrise</p>
                </div>
                {data.sys ? (
                  <p>{fromUnixTime(data.sys.sunrise).toLocaleTimeString()}</p>
                ) : null}
              </div>
              <div>
                <div>
                  {" "}
                  <p>Sunset</p>
                </div>
                {data.sys ? (
                  <p>{fromUnixTime(data.sys.sunset).toLocaleTimeString()}</p>
                ) : null}
              </div>
            </Col>
            <Col
              xs={12}
              className="d-flex justify-content-center align-items-center bottom"
            >
              <div className="feels mr-1">
                {data.main ? (
                  <p>Feels Like: {data.main.feels_like.toFixed(1)}°C</p>
                ) : null}
              </div>
              <div className="humidity ml-1">
                {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}
