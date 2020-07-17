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

  return (
    <section id="hero" className={style.hero}>
      <Navbar  expand="lg" >
        <Navbar.Brand href="#home" className={style.navbarBrandStyle} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={style.navColStyle}>
          <Nav className={`justify-content-center mx-auto ${style.navLinkStyle}`} >
            <Nav.Link href="#home" style={{color:"black"}} >Bảng báo giá</Nav.Link>
            <Nav.Link href="#link" style={{color:"black"}} >Nhận báo giá</Nav.Link>
            <Nav.Link href="#link" style={{color:"black"}} >Đăng ký lái thử</Nav.Link>
            <Nav.Link href="#link" style={{color:"black"}} >Gọi điện ngay</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
  
}

export default Menu
