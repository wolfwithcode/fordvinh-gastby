import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Carousel, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCar,
  faCogs,
  faGasPump,
  faSearch,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons"
import HomeStyle from "../styles/home.module.css"

import img1 from "../images/ford-ranger/galary/ford-ranger-2018-mau-den-49006j.jpg"
import img2 from "../images/ford-ranger/galary/ford-ranger-2018-mau-trang-49003j.jpg"
import img3 from "../images/ford-ranger/galary/ford-ranger-2018-mau-xam-49005j.jpg"
////ford eco sport
import imgEcosport1 from "../images/ford-eco-sport-1.jpeg"
import imgEcosport2 from "../images/ford-eco-sport-2.jpeg"
import imgEcosport3 from "../images/ford-eco-sport-3.jpeg"
import imgEcosport4 from "../images/ford-eco-sport-4.jpeg"
import imgEcosport5 from "../images/ford-eco-sport-5.jpeg"
import imgEcosport6 from "../images/ford-eco-sport-6.jpeg"
import imgEcosport7 from "../images/ford-eco-sport-7.jpeg"
////ford everest
import imgEverest1 from "../images/ford-everest-1.jpeg"
import imgEverest2 from "../images/ford-everest-2.jpeg"
import imgEverest3 from "../images/ford-everest-3.jpeg"
////ford explorer
import imgExplorer1 from "../images/ford-explorer-1.jpeg"
import imgExplorer2 from "../images/ford-explorer-2.jpeg"
import imgExplorer3 from "../images/ford-explorer-3.jpeg"
////ford ranger
import imgRanger1 from "../images/ford-ranger-1.jpeg"
import imgRanger2 from "../images/ford-ranger-2.jpeg"
import imgRanger3 from "../images/ford-ranger-3.jpeg"
// ////ford raptor
// import imgRaptor1 from "../images/ford-raptor-1.jpeg"
// import imgRaptor2 from "../images/ford-raptor-2.jpeg"
////ford transit
import imgTransit1 from "../images/ford-transit-1.jpeg"
import imgTransit2 from "../images/ford-transit-2.jpeg"
import imgTransit3 from "../images/ford-transit-3.jpeg"
////ford tourneo
import imgTourneo1 from "../images/ford-tourneo-1.jpg"
import imgTourneo2 from "../images/ford-tourneo-2.jpg"
import imgTourneo3 from "../images/ford-tourneo-3.jpg"

function CarInfoTemplate(car, i) {
  const cardClasses = ["card", HomeStyle.carCard].join(" ")
  const imgClasses = ["d-block", "w-100", HomeStyle.carImg].join(" ")
  const valueClasses = [
    "align-self-center",
    "py-2",
    "px-3",
    HomeStyle.carValue,
  ].join(" ")
  const cardBodyClasses = ["card-body", HomeStyle.cardBody].join(" ")
  /////////////data binding//////////////////////
  const imgageList = car.imgageList
  const nameCar = car.nameCar
  const priceCar = car.priceCar
  const fuelTankCapacity = car.fuelTankCapacity
  const bodyStyle = car.bodyStyle
  const seat = car.seat
  const transmission = car.transmission
  const modelList = car.modelList
  
  return (
    <Col className="col-12 col-md-6 col-lg-6 mx-auto my-3" key={i}>
      {/* <div className="card car-card"> */}
      <div className={cardClasses}>
        <Carousel>
          {imgageList.map((image, i) => (
            <Carousel.Item key={i}>
              <img className={imgClasses} src={image} alt={" slide " + i} />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={cardBodyClasses}>
          <div className="car-info d-flex justify-content-between">
            <div className="car-text text-uppercase">
              <h5 className={["font-weight-bold", HomeStyle.carInfo].join(" ")}>
                FORD
              </h5>
              <h6 className={HomeStyle.carInfo}>{nameCar}</h6>
            </div>
            <h5 className={valueClasses}>
              VND&nbsp;<span className="car-price">{priceCar}</span>
            </h5>
          </div>
        </div>
        <div className="card-footer text-capitalize d-flex justify-content-between">
          <p>
            <FontAwesomeIcon icon={faCar} />
            {seat}
          </p>
          <p>
            <FontAwesomeIcon icon={faCogs} />
            {transmission}
          </p>
          <p>
            <FontAwesomeIcon icon={faGasPump} />
            {fuelTankCapacity}
          </p>
        </div>
        <Table striped bordered hover style={{ fontSize: "smaller" }}>
          <thead>
            <tr>
              <th style={{ color: "red" }}>Phiên bản</th>
              <th style={{ color: "red" }}>Động cơ</th>
              <th style={{ color: "red" }}>Giá (VAT)</th>
            </tr>
          </thead>
          <tbody>
            {modelList.map((model, i) => (
              <tr key={i}>
                <td>{model.modelName}</td>
                <td>{model.engine}</td>
                <td>{model.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  )
}

function QuestionTextTemplate(question) {
  console.log("question ", question)
  const titleText = question.titleText
  const questionInfoText = question.questionInfoText
  const questionColumClasses = [
    "col-10 mx-auto my-2 col-md-6 d-flex justify-content-between p-4",
    question.iconColor,
  ].join(" ")
  const questionIconClasses = [HomeStyle.questionIcon, "mr-3"].join(" ")
  const questionInfo = HomeStyle.questionInfo
  const icon = question.icon
  return (
    <Col className={questionColumClasses}>
      <a className={questionIconClasses} style={{ color: "blue" }}>
        <FontAwesomeIcon icon={icon} />
      </a>
      <div className="question-text w-75">
        <h4 className="question-title text-capitalize font-weight-bold">
          {titleText}
        </h4>
        <p className={questionInfo}>{questionInfoText}</p>
      </div>
    </Col>
  )
}
export default function HomePage() {
  const carList = [
    {
      imgageList: [
        imgEcosport1,
        imgEcosport2,
        imgEcosport3,
        imgEcosport4,
        imgEcosport5,
        imgEcosport6,
        imgEcosport7,
      ],
      nameCar: "Ecosport",
      priceCar: "545,000,000",
      fuelTankCapacity: "60l",
      bodyStyle: "Sedan",
      seat:"5 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Ecosport 1.5 MT AMB",
          engine: "1.5L Xăng",
          price: "545.000.000",
        },
        {
          modelName: "Ecosport 1.5 AT AMB",
          engine: "1.5L Xăng",
          price: "569.000.000",
        },
        {
          modelName: "Ecosport 1.5 AT TREND",
          engine: "1.5L Xăng",
          price: "593.000.000",
        },
        {
          modelName: "Ecosport 1.5 AT TITA",
          engine: "1.5L Xăng",
          price: "648.000.000",
        },
        {
          modelName: "Ecosport 1.0 AT TITA",
          engine: "1.5L Ecoboost",
          price: "689.000.000",
        },
      ],
    },
    {
      imgageList: [imgEverest1, imgEverest2, imgEverest3],
      nameCar: "Everest",
      priceCar: "999,000,000",
      fuelTankCapacity: "100l",
      bodyStyle: "Sedan",
      seat:"7 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Everest 4X2 Abm MT",
          engine: "2.0 turbo",
          price: "999.000.000",
        },
        {
          modelName: "Everest 4X2 Abm AT",
          engine: "2.0 turbo",
          price: "1.052.000.000",
        },
        {
          modelName: "Everest 4X2 TREND",
          engine: "2.0 turbo",
          price: "1.112.000.000",
        },
        {
          modelName: "Everest 4X2 Titanium",
          engine: "2.0 turbo",
          price: "1.181.000.000",
        },
        {
          modelName: "Everest 4X4 Titanium",
          engine: "2.0 bi-turbo",
          price: "1.399.000.000",
        },
      ],
    },
    {
      imgageList: [imgExplorer1, imgExplorer2, imgExplorer3],
      nameCar: "Explorer",
      priceCar: "1,999,000,000",
      fuelTankCapacity: "90l",
      bodyStyle: "Sedan",
      seat:"7 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Explorer Ecoboost",
          engine: "2.3L Xăng",
          price: "1.999.000.000",
        },
      ],
    },
    {
      imgageList: [imgTourneo1, imgTourneo2, imgTourneo3],
      nameCar: "Tourneo",
      priceCar: "999,000,000",
      fuelTankCapacity: "90l",
      bodyStyle: "Sedan",
      seat:"7 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Tourneo Titanium",
          engine: "2.0L Xăng",
          price: "1.069.000.000",
        },
        {
          modelName: "Tourneo Trend",
          engine: "2.0L Xăng",
          price: "999.000.000",
        },
      ],
    },
    {
      imgageList: [imgTransit1, imgTransit2, imgTransit3],
      nameCar: "Transit",
      priceCar: "872,000,000",
      fuelTankCapacity: "90l",
      bodyStyle: "Sedan",
      seat:"16 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Transit Tiêu chuẩn",
          engine: "2.4L Dầu",
          price: "872.000.000",
        },
        {
          modelName: "Transit SVP",
          engine: "2.4L Dầu",
          price: "879.000.000",
        },
        {
          modelName: "Transit Cao cấp",
          engine: "2.4L Dầu",
          price: "919.000.000",
        },
      ],
    },
    {
      imgageList: [imgRanger1, imgRanger2, imgRanger3],
      nameCar: "Ranger",
      priceCar: "616,000,000",
      fuelTankCapacity: "90l",
      bodyStyle: "Sedan",
      seat:"5 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Ranger 4X4 XL",
          engine: "2.2L Dầu",
          price: "616.000.000",
        },
        {
          modelName: "Ranger 4X2 XLS MT",
          engine: "2.2L Dầu",
          price: "630.000.000",
        },
        {
          modelName: "Ranger 4X2 XLS AT",
          engine: "2.2L Dầu",
          price: "650.000.000",
        },
        {
          modelName: "Ranger 4X4 XLT MT",
          engine: "2.2L Dầu",
          price: "754.000.000",
        },
        {
          modelName: "Ranger 4X4 XLT AT",
          engine: "2.2L Dầu",
          price: "779.000.000",
        },
        {
          modelName: "Ranger WILDTRACK 4X2",
          engine: "2.0L Dầu",
          price: "853.000.000",
        },
        {
          modelName: "Ranger WILDTRACK 4X4",
          engine: "2.0L Dầu",
          price: "918.000.000",
        },
        {
          modelName: "Ranger RAPTOR",
          engine: "2.0L Dầu",
          price: "1.198.000.000",
        },
      ],
    },
  ]
  const questionClasses = [HomeStyle.question, "py-5"].join(" ")
  const questionList = [
    {
      titleText: "Bạn Đang Tìm Kiếm Một Chiếc Xe?",
      questionInfoText:
        "Nếu bạn đang tìm kiếm một chiếc xe dụ lịch hạng trung với những tính năng lái an toàn và thông minh hàng đầu ở một mức giá hiệu quả và tiết kiệm, hãy liên hệ với chúng tôi.",
      icon: faSearch,
      iconColor: HomeStyle.questionGrey,
    },
    {
      titleText: "Bạn muốn mua trả góp?",
      questionInfoText:
        "Bạn muốn mua một chiếc xe ô tô trả góp với số tiền nhỏ. MSB đang có chương trình mua xe trả góp bằng thẻ tín dụng với mức hỗ trợ 90%.",
      icon: faDollarSign,
      iconColor: HomeStyle.questionYellow,
    },
  ]
  return (
    <Layout>
      <SEO title="Home page"></SEO>
      <Container id="priceTable">
        <Row className="mb-5 mt-5">
          <Col className="d-flex flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1">
              {"Bảng báo giá"}
            </h1>
          </Col>
        </Row>
        <Row>{carList.map((car, i) => CarInfoTemplate(car, i))}</Row>
      </Container>
      <section className={questionClasses}>
        <Row>
          {questionList.map((question, i) => QuestionTextTemplate(question))}
        </Row>
      </section>
    </Layout>
  )
}
