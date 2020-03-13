import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import LogosBar from "../components/logosBar"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import ContactBar from '../components/contactBar'
import  "./index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ContactBar/>
      <Welcome/>
      <div className="introBlock">
        <h1 className="text-light my-4">I'M VENKAT</h1>
        <h3 className="text-secondary my-4" 
        style={{fontFamily:'Montserrat Thin'}}>
          hybrid mobile / web developer
        </h3>
        <Link to="/work">
          <button className="bg-transparent hover:bg-primary 
          text-primary font-semibold hover:text-white py-2 px-6 
          border border-primary hover:border-transparent my-4">
            View Work
          </button>
        </Link>
      </div>
      
      <LogosBar/>
    </Layout>
  )
}

export default IndexPage
