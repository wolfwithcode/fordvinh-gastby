import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/dist/js/bootstrap.min.js'
// import '../assets/js/jquery.min.js'
// import '../assets/bootstrap/js/bootstrap.min.js'
import "../assets/fonts/font-awesome.min.css"
import "../assets/css/styles.css"
import {
  Navbar,
  NavDropdown,
  FormControl,
  Button,
  Nav,
  Form,
  Container,
} from "react-bootstrap"
import $ from "jquery"
const Menu = () => {
  return (
    <Container>
      <Navbar bg="blue" expand="lg" className="bg-info">
        <Navbar.Brand href="#home">Ford</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center mx-auto">
            <Nav.Link href="#home">Bảng báo giá</Nav.Link>
            <Nav.Link href="#link">Nhận báo giá</Nav.Link>
            <Nav.Link href="#link">Đăng ký lái thử</Nav.Link>
            <Nav.Link href="#link">Gọi điện ngay</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Menu
