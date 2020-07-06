import React from 'react'
// import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import "../assets/css/styles.css"
// import Image from 'react-bootstrap/Image'

const HomePage = () => (
    <Layout>
        <SEO title="Home page"/>
        <div>
            <section id="promo">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="jumbotron">
                                <h1>Giới thiệu</h1>
                                <p><strong>Công ty TNHH Vinh Ford</strong>&nbsp;(gọi tắt là Vinh Ford - VIF) là đại lý ủy quyền chính thức của Ford Việt Nam tại khu vực với đầy đủ các chức năng bán hàng, dịch vụ hậu mãi và kinh doanh phụ tùng chính hãng.&nbsp;<strong>Đại lý Ford Vinh</strong>&nbsp;tọa
                                    lại tại Km 200,&nbsp;Đại lộ Lê Nin, Thành Phố Vinh, Tỉnh Nghệ An.</p>
                            </div>
                        </div>
                        <div class="col-md-6 justify-content-center">
                            <div class="card justify-content-center"><img class="rounded-circle img-fluid card-img-top w-100 d-block d-xl-flex justify-content-center align-items-center align-content-center" src={require('../assets/img/le-thanh-xuan.png')}/>
                                <div class="card-body">
                                    <h4 class="card-title">Lê Thanh Xuân</h4>
                                    <p class="text-danger card-text">Nhân viên kinh doanh -&nbsp;&nbsp;<i class="fa fa-phone"></i><strong>0977 857 315</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <section id="baogiatonghop">
        <div class="container">
            <div class="jumbotron">
                <h3><strong>FORD NGHỆ AN - TP.VINH -&nbsp;GIÁ XE TỐT NHẤT ƯU ĐÃI NHIỀU NHẤT</strong></h3>
                <h4><strong>Giảm Giá Tiền Mặt &nbsp;- Tặng Bảo Hiểm Thân Vỏ</strong><br/></h4>
                <p><em>Hãy Để Ford Nghệ An Báo Giá Lăn Bánh Tốt Nhất Cho Chiếc Xe Mơ Ước Của Bạn</em></p>
                <ul class="list-group">
                    <li class="list-group-item"><i class="fa fa-dot-circle-o"></i><span>Ford Ranger giá từ:&nbsp;<strong>616 triệu - Ưu đãi đến 80 triệu -&nbsp;Trả trước 191 Triệu lấy xe ngay - Gọi ngay để có mức giá tốt nhất</strong></span></li>
                    <li class="list-group-item"><i class="fa fa-dot-circle-o"></i><span>Ford Raptor:&nbsp;<strong>1.198 triệu - Ưu đãi đến 30 triệu -&nbsp;Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác</strong></span></li>
                    <li class="list-group-item"><i class="fa fa-dot-circle-o"></i><span>Ford Ecosport giá từ:&nbsp;<strong>545 triệu - Ưu đãi đến 48 triệu -&nbsp;Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác</strong></span></li>
                    <li class="list-group-item"><i class="fa fa-dot-circle-o"></i><span>Ford Everest giá từ:&nbsp;<strong>999 triệu - Ưu đãi đến 70 triệu -&nbsp;Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác</strong><br/></span></li>
                    <li class="list-group-item"><i class="fa fa-dot-circle-o"></i><span>Ford Explorer giá từ:&nbsp;<strong>1.199 triệu - Ưu đãi đến 40 triệu -&nbsp;Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác</strong><br/></span></li>
                    <li class="list-group-item"><i class="fa fa-dot-circle-o"></i><span>Ford Transit:&nbsp;<strong>842 triệu - Ưu đãi đến 160 triệu -&nbsp;Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác</strong><br/></span></li>
                </ul>
                <ul class="list-group">
                    <li class="list-group-item"><span><strong>Click ngay để xem chi tiết:&nbsp;</strong><a href="https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_ranger">Giá xe Ford Ranger 2020</a></span></li>
                    <li class="list-group-item"><span><strong>Click ngay để xem chi tiết:&nbsp;</strong><a href="https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_eco_sport">Giá xe Ford Eco Sport 2020</a></span></li>
                    <li class="list-group-item"><span><strong>Click ngay để xem chi tiết:&nbsp;</strong><a href="https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_everest">Giá xe Ford Everest 2020</a></span></li>
                    <li class="list-group-item"><span><strong>Click ngay để xem chi tiết:&nbsp;</strong><a href="https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_transit">Giá xe Ford Transit 2020</a><br/></span></li>
                </ul>
                <div class="row">
                    <div class="col-md-6">
                        <div id="uudai1">
                            <p class="border-dotted"><i class="fa fa-star"></i>&nbsp; &nbsp;<span style={{ textdecoration: 'underline' }}>Liên Hệ:&nbsp;</span>Lái thử và trải nghiệm miễn phí và nhận nhiều Khuyến Mãi hấp dẫn khác, liên hệ trực tiếp với Phòng Bán Hàng để mua xe với
                                giá tốt nhất!Xe FORD có sẵn nhiều màu để lựa chọn - Nhiều ưu đãi cho khách hàng - Phương thức thanh toán linh hoạt, phù hợp: trả thẳng, trả góp với lãi suất ưu đãi . QUÝ KHÁCH XIN VUI LÒNG LIÊN HỆ với Phòng Bán Hàng để
                                mua xe với giá tốt nhất!</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="uudai1">
                            <p class="border-dotted"><i class="fa fa-star"></i>&nbsp; &nbsp;Quà tặng: Ưu đãi giá xe Giảm Giá Tiền Mặt Trực Tiếp&nbsp;Tặng Bảo Hiểm Thân Vỏ và nhiều ưu đãi khác</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="bao-gia-ford-ranger">
        <div class="container">
            <div class="jumbotron">
                <h1><strong>FORD RANGER - Trả trước 196 Triệu Nhận Xe Ngay</strong></h1>
                <p><strong>GIẢM GIÁ TIỀN MẶT ƯU ĐÃI TỚI 84 TRIỆU</strong></p>
                <p><strong>BẢNG GIÁ XE RANGER THÁNG 7</strong><br/></p>
                <p><strong>LIÊN HỆ TRỰC TIẾP ĐỂ CẬP NHẬT KHUYẾN MÃI MỚI NHẤT</strong><br/></p>
                <p></p>
            </div>
        </div>
        <div class="container" id="uudai-ford-ranger">
            <div id="uudai-ford-ranger-chitiet">
                <p class="border-dotted"><i class="fa fa-star"></i>&nbsp; &nbsp;Gặp mặt hoặc gọi đến số&nbsp;<strong>0977 857 315</strong>&nbsp;để nhận chiết khấu tiền mặt hấp dẫn dành riêng cho Quý Khách -&nbsp;Giá trên là giá niêm yết. Để nhận thêm khuyến mãi Quý khách vui
                    lòng gọi Xuân để nhận được ưu đãi nhiều nhất, xe có sẵn giao ngay, bốc biển số đẹp, hỗ trợ giao xe tận nhà,..</p>
            </div><table id="bao-gia-ford-ranger" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>MẪU XE</th>
                <th>GIÁ BÁN NIÊM YẾT</th>                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ranger XLT Limited 2020</td>
                <td>799,000,000</td>                
            </tr>
            <tr>
                <td>Ranger Wildtrak 2.0L Turbo AT 4X2</td>
                <td>853,000,000</td>
            </tr>
            <tr>
                <td>Ranger Wildtrak 2.0L Bi-Turbo AT 4X4</td>
                <td>918,000,000</td>                
            </tr>
            <tr>
                <td>Ranger XL 2.2L</td>                
                <td>616,000,000</td>
            </tr>
            
        </tbody>
    </table></div>
        <div class="container">
            <div class="carousel slide" data-ride="carousel" id="carousel-1">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active"><img class="w-100 d-block" src={require("../assets/img/ford-ranger-2018-mau-den-49006j.jpg")} alt="Slide Image" /></div>
                    <div class="carousel-item"><img class="w-100 d-block" src={require("../assets/img/ford-ranger-2018-mau-trang-49003j.jpg")} alt="Slide Image"/></div>
                    <div class="carousel-item"><img class="w-100 d-block" src={require("../assets/img/ford-ranger-2018-mau-xam-49005j.jpg")} alt="Slide Image"/></div>
                </div>
                <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button"
                        data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                <ol class="carousel-indicators">
                    <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-1" data-slide-to="1"></li>
                    <li data-target="#carousel-1" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
        <div class="container">
            <h1>Hình ảnh</h1>
            <div class="row">
                <div class="col-md-4">
                    <div class="card"><img class="card-img-top w-100 d-block" src={require("../assets/img/ford-ranger-2018-mau-den-49006j.jpg")}/></div>
                </div>
                <div class="col-md-4">
                    <div class="card"><img class="card-img-top w-100 d-block" src={require("../assets/img/ford-ranger-2018-mau-trang-49003j.jpg")}/></div>
                </div>
                <div class="col-md-4">
                    <div class="card"><img class="card-img-top w-100 d-block" src={require("../assets/img/ford-ranger-2018-mau-xam-49005j.jpg")}/></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card"><img class="card-img-top w-100 d-block" src={require("../assets/img/ford-ranger-xlt-limited-1-99056j.jpg")}/></div>
                </div>
                <div class="col-md-4">
                    <div class="card"><img class="card-img-top w-100 d-block" src={require("../assets/img/ford-ranger-xlt-limited-4-99055j.jpg")}/></div>
                </div>
                <div class="col-md-4">
                    <div class="card"><img class="card-img-top w-100 d-block" src={require("../assets/img/ford-ranger-xlt-limited-3-99053j.jpg")}/></div>
                </div>
            </div>
        </div>
        <div class="container"></div>
    </section>
        </div>

    </Layout>
)


export default HomePage;