import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import '../assets/js/jquery.min.js'
// import '../assets/bootstrap/js/bootstrap.min.js'
import "../assets/fonts/font-awesome.min.css"
import "../assets/css/styles.css"
import $ from 'jquery'
const Menu = () => {
  return (
    <div      
    >
      <nav class="navbar navbar-light navbar-expand-md text-center">
        <div class="container-fluid"><a class="navbar-brand" href="#">Ford</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse text-center"
                id="navcol-1">
                <ul class="nav navbar-nav text-center flex-grow-1 justify-content-center">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Bảng báo giá&nbsp;<i class="fa fa-shopping-bag"></i></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Nhận báo giá&nbsp;<i class="fa fa-money"></i></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Đăng ký lái thử&nbsp;<i class="fa fa-car"></i></a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#">Gọi điện ngay&nbsp;&nbsp;<i class="fa fa-phone"></i></a></li>
                </ul>
            </div>
        </div>
    </nav>   
    </div>
  )
}

export default Menu
