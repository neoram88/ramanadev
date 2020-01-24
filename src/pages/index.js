import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import LogosBar from "../components/logosBar"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import  "./index.scss"
import  "./index.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Welcome/>
      <div style={{textAlign:`center`}}>
        <h1 className="text-light">I'M VENKAT</h1>
        <h3 className="text-secondary">hybrid mobile / web developer</h3>
        <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent">View Profile</button>
      </div>
      
      <LogosBar/>
    </Layout>
  )
}

export default IndexPage
