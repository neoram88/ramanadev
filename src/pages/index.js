import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
      <div className="introBlock">
        <h1 className="text-light">I'M VENKAT</h1>
        <h3 className="text-secondary" 
        style={{fontFamily:'Montserrat Thin'}}>
          hybrid mobile / web developer
        </h3>
        <Link to="/work">
          <button className="bg-transparent hover:bg-primary 
          text-primary font-semibold hover:text-white py-2 px-4 
          border border-primary hover:border-transparent">
            View Work
          </button>
        </Link>
      </div>
      
      <LogosBar/>
    </Layout>
  )
}

export default IndexPage
