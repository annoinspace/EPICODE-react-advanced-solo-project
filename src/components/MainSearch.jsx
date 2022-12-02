import axios from "axios"
import { Container } from "react-bootstrap"
import React from "react"
import TopDisplay from "./TopDisplay"
import BottomDisplay from "./BottomDisplay"

export default function MainSearch() {
  //using london as the city for now, will change it to dynamic input later

  //const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=8c1b60ad01126a2d8883709df2ba5cdc`
  return (
    <>
      <Container className="h-100 d-flex flex-column justify-content-between">
        <TopDisplay />
        <BottomDisplay />
      </Container>
    </>
  )
}
