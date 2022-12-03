import { Container } from "react-bootstrap"
import React from "react"
import axios from "axios"
import TopDisplay from "./TopDisplay"
import BottomDisplay from "./BottomDisplay"
import { useState } from "react"

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

  return (
    <Container className="h-100 main">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="what is the weather like today?"
          type="text"
        ></input>
      </div>
      {loading ? (
        <></>
      ) : (
        <>
          <TopDisplay
            name={data.name}
            weather={data.weather}
            main={data.main}
            sys={data.sys}
          />

          <BottomDisplay main={data.main} sys={data.sys} />
        </>
      )}
    </Container>
  )
}
