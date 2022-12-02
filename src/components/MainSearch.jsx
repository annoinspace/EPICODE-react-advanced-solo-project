import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import React from "react"
// import TopDisplay from "./TopDisplay"
import BottomDisplay from "./BottomDisplay"
import { useState } from "react"

export default function MainSearch() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  //using london as the city for now, will change it to dynamic input later

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8c1b60ad01126a2d8883709df2ba5cdc&units=metric`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        console.log(response.data)
        setData(response.data)

        console.log("the location is", location)
      })
      setLocation("")
    }
  }

  return (
    <>
      <Container className="h-100 d-flex flex-column justify-content-between">
        {/* <TopDisplay city={data.name} /> */}
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
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            placeholder="search ..."
            type="text"
          ></input>
        </div>
        <BottomDisplay />
      </Container>
    </>
  )
}
