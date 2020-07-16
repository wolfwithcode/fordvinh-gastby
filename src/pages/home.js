import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Carousel } from "react-bootstrap"
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

const cardClasses = ["card", HomeStyle.carCard].join(" ")
const imgClasses = ["d-block", "w-100", HomeStyle.carImg].join(" ")
const valueClasses = [
  "align-self-center",
  "py-2",
  "px-3",
  HomeStyle.carValue,
].join(" ")
const cardBodyClasses = ["card-body", HomeStyle.cardBody].join(" ")

function CarInfoTemplate() {
  return (
    <Col className="col-10 col-md-6 col-lg-4 mx-auto my-3">
      {/* <div className="card car-card"> */}
      <div className={cardClasses}>
        <Carousel>
          <Carousel.Item>
            <img className={imgClasses} src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className={imgClasses} src={img2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className={imgClasses} src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className={cardBodyClasses}>
          <div className="car-info d-flex justify-content-between">
            <div className="car-text text-uppercase">
              <h5 className={["font-weight-bold", HomeStyle.carInfo].join(" ")}>
                FORD
              </h5>
              <h6 className={HomeStyle.carInfo}>Ecosport</h6>
            </div>
            <h5 className={valueClasses}>
              $&nbsp;<span className="car-price">10,000</span>
            </h5>
          </div>
        </div>
        <div className="card-footer text-capitalize d-flex justify-content-between">
          <p>
            <FontAwesomeIcon icon={faCar} />
            Sedan
          </p>
          <p>
            <FontAwesomeIcon icon={faCogs} />
            Tự động
          </p>
          <p>
            <FontAwesomeIcon icon={faGasPump} />
            60l
          </p>
        </div>
      </div>
    </Col>
  )
}

function QuestionTextTemplate(question) {
  console.log("question ", question);
  // const titleText = "Bạn Đang Tìm Kiếm Một Chiếc Xe?"
  // const questionInfoText =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus!"
  // const questionColumClasses = [
  //   "col-10 mx-auto my-2 col-md-6 d-flex justify-content-between p-4",
  //   HomeStyle.questionGrey,
  // ].join(" ")
  // const questionIconClasses = [HomeStyle.questionIcon, "mr-3"].join(" ")
  // const questionInfo = HomeStyle.questionInfo
  // const icon = faSearch
  const titleText = question.titleText;
  const questionInfoText = question.questionInfoText;    
  const questionColumClasses = [
    "col-10 mx-auto my-2 col-md-6 d-flex justify-content-between p-4",
    question.iconColor,
  ].join(" ")
  const questionIconClasses = [HomeStyle.questionIcon, "mr-3"].join(" ")
  const questionInfo = HomeStyle.questionInfo
  const icon = question.icon;
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
  const questionClasses = [HomeStyle.question, "py-5"].join(" ")
  const questionList = [
    {
      titleText: "Bạn Đang Tìm Kiếm Một Chiếc Xe?",
      questionInfoText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus!",
      icon: faSearch,
      iconColor: HomeStyle.questionGrey,
    },
    {
      titleText: "Bạn muốn mua trả góp?",
      questionInfoText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus!",
      icon: faDollarSign,
      iconColor: HomeStyle.questionYellow,
    },
  ]
  return (
    <Layout>
      <SEO title="Home page"></SEO>
      <Container>
        <Row>{[...Array(9)].map((x, i) => CarInfoTemplate())}</Row>
      </Container>
      <section className={questionClasses}>
        <Row>
          {/* <Col className="col-10 mx-auto my-2 col-md-6 d-flex justify-content-between question-grey p-4">
            <a className="question-icon mr-3">
              <FontAwesomeIcon icon={faSearch}/>
            </a>
            <div className="question-text w-75">
              <h4 className="question-title text-capitalize font-weight-bold">Bạn Đang Tìm Kiếm Một Chiếc Xe?</h4>
              <p className="question-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellendus!</p>
            </div>
          </Col>         */}
          {questionList.map((question, i) => QuestionTextTemplate(question))}
        </Row>
      </section>
    </Layout>
  )
}
