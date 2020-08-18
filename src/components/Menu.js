import React from "react"
// import { Link } from "gatsby"
import style from "./Menu.module.css"
import {
  Navbar,
  // NavDropdown,
  // FormControl,
  // Button,
  Nav,
  // Form,
  Container as section,
} from "react-bootstrap"


// import HeroImage from "../images/ford-ranger.jpeg"
// import FordLogo from "../assets/img/ford-vector-logo.svg"

const backgroundStyle = {
  // backgroundImage: `url(${HeroImage})`,
  // backgroundPosition: 'center',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  // width: '100%',
  // height: '50vh',
}
const Menu = (props) => {
  const {enableBackgroundImage} = props;
  console.log('enableBackgroundImage',enableBackgroundImage)
  const numberPhone = "0977857315"
  return (
    <section id="hero" >
      <Navbar  expand="lg" >
        <Navbar.Brand href="/" className={style.navbarBrandStyle} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={style.navColStyle}>
          <Nav className={`justify-content-center mx-auto ${style.navLinkStyle}`} >
            <Nav.Link href="/#priceTable" style={{color:"black"}} >Bảng báo giá</Nav.Link>
            <Nav.Link href="/#contact" style={{color:"black"}} >Liên hệ</Nav.Link>
            <Nav.Link href={"tel:"+numberPhone} style={{color:"black"}} >Gọi điện ngay</Nav.Link>
            <Nav.Link href="/blog" style={{color:"black"}} >Tin tức</Nav.Link>
            <Nav.Link href="/mail" style={{color:"black"}} >Gửi báo giá</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
  
}

export default Menu
