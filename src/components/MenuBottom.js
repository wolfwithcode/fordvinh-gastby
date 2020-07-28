import React from 'react'
import {Nav, NavItem, NavLink, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faHome, faUserCircle, faDollarSign, faAddressBook, faPhone } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/MenuBottom.module.css'

const tabs = [{
    route: "#priceTable",
    icon: faDollarSign,
    label: "Báo giá"
  },{
    route: "#contact",
    icon: faAddressBook,
    label: "Địa chỉ"
  },{
    route: "tel:0977857315",
    icon: faPhone,
    label: "Gọi"
  }]


  // console.log('style ',style)


// const navbarClasses = [style.navbar,'fixed-bottom', 'navbar-light'].join(' ') ;
// const bottomTabNavClasses = [style.bottomNavLink,'fixed-bottom', 'navbar-light'].join(' ') ;

export default function MenuBottom() {
    return (
        <Container>
        <nav className="navbar fixed-bottom navbar-light"  role="navigation" style={{backgroundColor:'#0066ff'}}>
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`} style={{ borderTop: 'solid 1px #EBEBEB'}}>
                  <NavLink href={tab.route} className="nav-link" style={{color: 'white'}}>
                    <div className="row d-flex flex-column justify-content-center align-items-center" style={{marginLeft:'0', marginRight:0, marginBottom:'15px'}}>
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div>{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
      </Container>
    )
}
