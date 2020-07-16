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

// const heroStyle = {
//   backgroundImage: `url(${HeroImage})`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   width: "100%",
//   height: "100vh",
// };

// const navbarBrandStyle = {
//   backgroundImage: `url(${FordLogo})`,
//   width: "200px",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   height: "80px",
// }

// const navColStyle = {
//   fontSize: "13px",
//   fontWeight: "600",
//   textTransform: "uppercase",
// }
// const navLinkStyle = {
//   color: "rgb(34,34,34)"
// }
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
  

  // return (
  //   <section id="hero" style={mystyle}>
  //       <nav class="navbar navbar-light navbar-expand-md">
  //           <div class="container-fluid"><a class="navbar-brand" href="#"></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
  //               <div class="collapse navbar-collapse"
  //                   id="navcol-1">
  //                   <ul class="nav navbar-nav mx-auto">
  //                       <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Ford Ranger</a></li>
  //                       <li class="nav-item" role="presentation"><a class="nav-link" href="#">Ford Eco</a></li>
  //                       <li class="nav-item" role="presentation"><a class="nav-link" href="#">Ford X</a></li>
  //                   </ul>
  //                   <ul class="nav navbar-nav">
  //                       <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Shop</a></li>
  //                       <li class="nav-item" role="presentation"><a class="nav-link" href="#">Sign In</a></li>
  //                   </ul>
  //               </div>
  //           </div>
  //       </nav>
  //   </section>
  // )
}

export default Menu
