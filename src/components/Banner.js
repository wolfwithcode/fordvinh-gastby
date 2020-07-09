import React from "react"
import { Carousel, Button } from "react-bootstrap"

import image1 from "../images/banner/ford-mustang.jpg"
import image2 from "../images/banner/ford-ranger.jpg"
import image3 from "../images/banner/ford-steering.jpg"

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  )
}
