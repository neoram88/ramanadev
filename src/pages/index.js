import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import LogosBar from "../components/logosBar"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import  "./index.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Welcome/>
      <LogosBar/>
    </Layout>
  )
}

export default IndexPage
