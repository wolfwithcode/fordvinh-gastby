import React from "react"
import Banner from "../components/banner"
// import {Link} from 'gatsby'
// const images = require.context('../../public/images', true);
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Card,
  // Button,
  ListGroup,
  Table,
  Carousel,
  // Image,
} from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/css/styles.css"
// import Image from 'react-bootstrap/Image'
import avaterImg from "../images/le-thanh-xuan.png"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomePage1 = () => {
  const listCars = [
    {
      title: "Ford Ranger",
      offer:
        "616 triệu - Ưu đãi đến 80 triệu . Trả trước 191 Triệu lấy xe ngay - Gọi ngay để có mức giá tốt nhất",
      link:
        "https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_transit",
    },
    {
      title: "Ford Raptor",
      offer:
        "1.198 triệu - Ưu đãi đến 30 triệu . Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác",
      link:
        "https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_transit",
    },
    {
      title: "Ford Ecosport",
      offer:
        "545 triệu - Ưu đãi đến 48 triệu . Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác",
      link:
        "https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_transit",
    },
    {
      title: "Ford Everest",
      offer:
        "999 triệu - Ưu đãi đến 70 triệu . Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác",
      link:
        "https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_transit",
    },
    {
      title: "Ford Explorer",
      offer:
        "1.199 triệu - Ưu đãi đến 40 triệu . Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác",
      link:
        "https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_transit",
    },
    {
      title: "Ford Transit",
      offer:
        "842 triệu - Ưu đãi đến 160 triệu. Gọi ngay để có mức giá tốt nhất - Và nhiều ưu đãi khác",
      link:
        "https://dailyxe.com.vn/showroom/dai-ly-ford-vinh-nghe-an-148h.html#gia_xe_ford_transit",
    },
  ]

  const listCarsPrice = [
    {
      title: "Ranger XLT Limited 2020",
      price: "799,000,000",
    },

    {
      title: "Ranger Wildtrak 2.0L Turbo AT 4X2",
      price: "853,000,000",
    },

    {
      title: "Ranger Wildtrak 2.0L Bi-Turbo AT 4X4",
      price: "918,000,000",
    },

    {
      title: "Ranger XL 2.2L",
      price: "616,000,000",
    },
  ]

  const query = useStaticQuery(graphql`
    query {
      carousel: allFile(
        filter: { relativeDirectory: { eq: "ford-ranger/carousel" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      galary: allFile(
        filter: { relativeDirectory: { eq: "ford-ranger/galary" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)
  console.log("query carousel", query.carousel)
  console.log("query galary", query.galary)
  const CarouselItemSources = query.carousel.nodes.map(
    node => node.childImageSharp.fluid
  )
  console.log("CarouselItemSource ", CarouselItemSources)
  const GalaryItemSources = query.galary.nodes.map(
    node => node.childImageSharp.fluid
  )
  console.log("GalaryItemSources ", GalaryItemSources)

  return (
    <Layout>
      <SEO title="Home page" />
      <Banner />      
      <section id="baogiatonghop">
        <Container>
          <Jumbotron>
            <h3>
              <strong>
                FORD NGHỆ AN - TP.VINH -&nbsp;GIÁ XE TỐT NHẤT ƯU ĐÃI NHIỀU NHẤT
              </strong>
            </h3>
            <h4>
              <strong>Giảm Giá Tiền Mặt &nbsp;- Tặng Bảo Hiểm Thân Vỏ</strong>
              <br />
            </h4>
            <p>
              <em>
                Hãy Để Ford Nghệ An Báo Giá Lăn Bánh Tốt Nhất Cho Chiếc Xe Mơ
                Ước Của Bạn
              </em>
            </p>
            <ListGroup>
              {listCars.map((car, i) => (
                <ListGroup.Item key={i}>
                  <i className="fa fa-dot-circle-o"></i>
                  <span>
                    {" "}
                    {car.title} &nbsp; {car.offer}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <ListGroup>
              {listCars.map((car, i) => (
                <ListGroup.Item key={i}>
                  <span>
                    <strong>Click ngay để xem chi tiết:&nbsp;</strong>
                    <a href={car.link}>{car.title} 2020</a>
                    <br />
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Row>
              <Col md={6}>
                <div id="uudai1">
                  <p className="border-dotted">
                    <i className="fa fa-star"></i>&nbsp; &nbsp;
                    <span style={{ textdecoration: "underline" }}>
                      Liên Hệ:&nbsp;
                    </span>
                    Lái thử và trải nghiệm miễn phí và nhận nhiều Khuyến Mãi hấp
                    dẫn khác, liên hệ trực tiếp với Phòng Bán Hàng để mua xe với
                    giá tốt nhất!Xe FORD có sẵn nhiều màu để lựa chọn - Nhiều ưu
                    đãi cho khách hàng - Phương thức thanh toán linh hoạt, phù
                    hợp: trả thẳng, trả góp với lãi suất ưu đãi . QUÝ KHÁCH XIN
                    VUI LÒNG LIÊN HỆ với Phòng Bán Hàng để mua xe với giá tốt
                    nhất!
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div id="uudai1">
                  <p>
                    <i className="fa fa-star"></i>&nbsp; &nbsp;Quà tặng: Ưu đãi
                    giá xe Giảm Giá Tiền Mặt Trực Tiếp&nbsp;Tặng Bảo Hiểm Thân
                    Vỏ và nhiều ưu đãi khác
                  </p>
                </div>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </section>
      <section id="bao-gia-ford-ranger">
        <Container>
          <Jumbotron>
            <h1>
              <strong>FORD RANGER - Trả trước 196 Triệu Nhận Xe Ngay</strong>
            </h1>
            <p>
              <strong>GIẢM GIÁ TIỀN MẶT ƯU ĐÃI TỚI 84 TRIỆU</strong>
            </p>
            <p>
              <strong>BẢNG GIÁ XE RANGER THÁNG 7</strong>
              <br />
            </p>
            <p>
              <strong>LIÊN HỆ TRỰC TIẾP ĐỂ CẬP NHẬT KHUYẾN MÃI MỚI NHẤT</strong>
              <br />
            </p>
          </Jumbotron>
          <div className="container" id="uudai-ford-ranger">
            <div id="uudai-ford-ranger-chitiet">
              <p className="border-dotted">
                <i className="fa fa-star"></i>&nbsp; &nbsp;Gặp mặt hoặc gọi đến
                số&nbsp;<strong>0977 857 315</strong>&nbsp;để nhận chiết khấu
                tiền mặt hấp dẫn dành riêng cho Quý Khách -&nbsp;Giá trên là giá
                niêm yết. Để nhận thêm khuyến mãi Quý khách vui lòng gọi Xuân để
                nhận được ưu đãi nhiều nhất, xe có sẵn giao ngay, bốc biển số
                đẹp, hỗ trợ giao xe tận nhà,..
              </p>
            </div>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>MẪU XE</th>
                <th>GIÁ BÁN NIÊM YẾT</th>
              </tr>
            </thead>
            <tbody>
              {listCarsPrice.map((car, i) => (
                <tr key={i}>
                  <td>{car.title}</td>
                  <td>{car.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Carousel>
            {CarouselItemSources.map((CarouselItem, i) => (
              <Carousel.Item key={i}>
                <Img
                  className="d-block w-100"
                  fluid={CarouselItem}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          <Container>
            <h1>Hình ảnh</h1>
            <Row>
              {GalaryItemSources.map((GalaryItem, i) => (
                <Col md={4} key={i}>
                  <Card>
                    <Img
                      className="card-img-top w-100 d-block"
                      fluid={GalaryItem}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </section>
    </Layout>
  )
}

export default HomePage1
