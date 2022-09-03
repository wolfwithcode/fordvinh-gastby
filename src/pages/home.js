import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CarInfo from "../components/CarInfo"
// import { Container, Row, Col, Carousel, Table } from "react-bootstrap"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"

import {
  // faCar,
  // faCogs,
  // faGasPump,
  faSearch,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons"
import HomeStyle from "../styles/home.module.css"
import Banner from "../components/Banner"
import Footer from "../components/Footer"

function QuestionTextTemplate(question, i) {
  // console.log("question ", question)
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
    <Col className={questionColumClasses} key={i}>
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
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, {
    style: "currency",
    currency: curr,
  }).format(n)

function translateModelResponse(model) {
  // "id": 1,
  // "name": "Ranger 4X4 XL",
  // "engine": "2.2L Dầu",
  // "price": "616000000",
  const { name, engine, price } = model
  return {
    modelName: name,
    engine,
    price: toCurrency(price, "VND"),
  }
}
function translateOneCarResponse(car) {
  console.log("car ", car)

  const {
    id,
    name,
    price,
    fuel_tank_capacity,
    body_style,
    seat,
    transmission,
    models,
  } = car

  const nameCar = name
  const priceCar = price
  const fuelTankCapacity = fuel_tank_capacity
  const bodyStyle = body_style

  const modelList = models.map(translateModelResponse)
  return {
    nameCar,
    priceCar,
    fuelTankCapacity,
    bodyStyle,
    seat,
    transmission,
    modelList,
  }
}

function translateCarsResponse(cars, imgageListMap) {
  console.log("cars ", cars)
  console.log("imgageListMap ", imgageListMap)

  return cars.map(car => {
    const imageList = imgageListMap[car.name]
    const convertedCar = translateOneCarResponse(car)
    return { ...convertedCar, imageList }
  })
  // return []
}
export default function HomePage() {
  const query = useStaticQuery(graphql`
    query {
      allStrapiCars {
        nodes {
          body_style
          fuel_tank_capacity
          strapiId
          seat
          price
          name
          transmission
          models {
            engine
            id
            name
            price
          }
        }
      }
      fordEcoSport: allFile(
        filter: { relativeDirectory: { eq: "ford-eco-sport" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fordRanger: allFile(
        filter: { relativeDirectory: { eq: "ford-ranger" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fordTransit: allFile(
        filter: { relativeDirectory: { eq: "ford-transit" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fordExplorer: allFile(
        filter: { relativeDirectory: { eq: "ford-explorer" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fordEverest: allFile(
        filter: { relativeDirectory: { eq: "ford-everest" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fordTourneo: allFile(
        filter: { relativeDirectory: { eq: "ford-tourneo" } }
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

  console.log("query ", query)

  const FordEcoSportImages = query.fordEcoSport.nodes.map(
    node => node.childImageSharp.fluid
  )
  const FordRangerImages = query.fordRanger.nodes.map(
    node => node.childImageSharp.fluid
  )
  const FordEverestImages = query.fordEverest.nodes.map(
    node => node.childImageSharp.fluid
  )
  const FordTransitImages = query.fordTransit.nodes.map(
    node => node.childImageSharp.fluid
  )
  const FordExplorerImages = query.fordExplorer.nodes.map(
    node => node.childImageSharp.fluid
  )
  const FordTourneoImages = query.fordTourneo.nodes.map(
    node => node.childImageSharp.fluid
  )
  // console.log("FordEcoImages ", FordEcoSportImages);
  const imgageListMap = {
    Ranger: FordRangerImages,
    Everest: FordEverestImages,
    Explorer: FordExplorerImages,
    Tourneo: FordTourneoImages,
    EcoSport: FordEcoSportImages,
    Transit: FordTransitImages,
  }

  const translatedCarsResponse = translateCarsResponse(
    query.allStrapiCars.nodes,
    imgageListMap
  )
  console.log("translatedCarsResponse ", translatedCarsResponse)
  const carList = [
    {
      imgageList: [...FordRangerImages],
      nameCar: "Ranger",
      priceCar: "616,000,000",
      fuelTankCapacity: "90l",
      bodyStyle: "Sedan",
      seat: "5 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Ranger 4X4 XL",
          engine: "2.2L Dầu",
          price: "628.000.000",
        },
        {
          modelName: "Ranger 4X2 XLS MT",
          engine: "2.2L Dầu",
          price: "642.000.000",
        },
        {
          modelName: "Ranger 4X2 XLS AT",
          engine: "2.2L Dầu",
          price: "662.000.000",
        },
        // {
        //   modelName: "Ranger 4X4 XLT MT",
        //   engine: "2.2L Dầu",
        //   price: "754.000.000",
        // },
        {
          modelName: "Ranger 4X4 XLT AT",
          engine: "2.0L Dầu",
          price: "811.000.000",
        },
        // {
        //   modelName: "Ranger WILDTRACK 4X2",
        //   engine: "2.0L Dầu",
        //   price: "853.000.000",
        // },
        {
          modelName: "Ranger WILDTRACK 4X4",
          engine: "2.0L Dầu",
          price: "937.000.000",
        },
        {
          modelName: "Ranger RAPTOR",
          engine: "2.0L Dầu",
          price: "1.202.000.000",
        },
      ],
    },
    {
      imgageList: [...FordEverestImages],
      nameCar: "Everest",
      priceCar: "999,000,000",
      fuelTankCapacity: "100l",
      bodyStyle: "Sedan",
      seat: "7 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Everest 4X2 Titanium",
          engine: "2.0 bi-turbo",
          price: "1.193.000.000",
        },
        {
          modelName: "Everest 4X4 Titanium",
          engine: "2.0 bi-turbo",
          price: "1.412.000.000",
        },
      ],
    },
    {
      imgageList: [...FordExplorerImages],
      nameCar: "Explorer",
      priceCar: "2,366,000,000",
      fuelTankCapacity: "90l",
      bodyStyle: "Sedan",
      seat: "7 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Explorer Ecoboost",
          engine: "2.3L Xăng",
          price: "2.366.000.000",
        },
      ],
    },
    {
      imgageList: [...FordTransitImages],
      nameCar: "Transit",
      priceCar: "872,000,000",
      fuelTankCapacity: "90l",
      bodyStyle: "Sedan",
      seat: "16 ghế",
      transmission: "Auto",
      modelList: [
        {
          modelName: "Transit SVP",
          engine: "2.4L Dầu",
          price: "845.000.000",
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
      <SEO title="Đại lý xe Ford Vinh"></SEO>
      <div
        className="col-md-8 offset-md-2"
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        {/* <Menu enableBackgroundImage={true}/> */}
        <Banner />
      </div>

      <Container id="priceTable">
        <Row className="mb-5 mt-5">
          <Col className="d-flex flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1">
              {"Bảng báo giá"}
            </h1>
          </Col>
        </Row>
        {/* <Row>{carList.map((car, i) => CarInfoTemplate(car, i))}</Row> */}
        <Row>
          {translatedCarsResponse.map((car, i) => (
            <CarInfo {...car} key={i} />
          ))}
        </Row>
      </Container>
      <section className={questionClasses}>
        <Row>
          {questionList.map((question, i) => QuestionTextTemplate(question, i))}
        </Row>
      </section>
      <Footer />
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query MyQuery {
//     allStrapiCars {
//       nodes {
//         name
//         price
//         seat
//         body_style
//         strapiId
//       }
//     }
//   }
// `
