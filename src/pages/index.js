import React from "react"
// import { graphql } from "gatsby"
import HomePage from "./home"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { Helmet } from "react-helmet"

const IndexPage = ({ data }) => {
  //console.log(data)
  return (
    <div>
      {/* <Helmet>
        <title>{"Đại lý xe Ford Vinh"}</title>
        <meta name="description" content="description is my name."></meta>
        <meta name="keywords" content="ford vinh, xe ford, vinh ford"></meta>
      </Helmet> */}
      <HomePage />
    </div>
  )
}

export default IndexPage
