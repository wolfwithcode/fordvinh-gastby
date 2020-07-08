import React from "react"
import {Carousel, Button} from 'react-bootstrap'

import image1 from '../images/banner/ford-mustang.jpg'
import image2 from '../images/banner/ford-ranger.jpg'
import image3 from '../images/banner/ford-steering.jpg'

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary" style={{marginBottom:"15px"}}>Xem thêm</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="primary" style={{marginBottom:"15px"}}>Xem thêm</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="primary" style={{marginBottom:"15px"}}>Xem thêm</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
