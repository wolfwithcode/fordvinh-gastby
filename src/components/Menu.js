import React from "react"
import { Link } from "gatsby"
import style from "./Menu.module.css"
import {
  Navbar,
  NavDropdown,
  FormControl,
  Button,
  Nav,
  Form,
  Container as section,
} from "react-bootstrap"


import HeroImage from "../images/ford-ranger.jpeg"
import FordLogo from "../assets/img/ford-vector-logo.svg"


const Menu = () => {
  const numberPhone = "0333037357"
  return (
    <section id="hero" className={style.hero}>
      <Navbar  expand="lg" >
        <Navbar.Brand href="/" className={style.navbarBrandStyle} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={style.navColStyle}>
          <Nav className={`justify-content-center mx-auto ${style.navLinkStyle}`} >
            <Nav.Link href="#priceTable" style={{color:"black"}} >Bảng báo giá</Nav.Link>
            <Nav.Link href="#contact" style={{color:"black"}} >Liên hệ</Nav.Link>
            <Nav.Link href={"tel:"+numberPhone} style={{color:"black"}} >Gọi điện ngay</Nav.Link>
            {/* <Nav.Link href="#link" style={{color:"black"}} >Gọi điện ngay</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
  
}

export default Menu
