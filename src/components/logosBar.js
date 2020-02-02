
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import "./logosBar.css"

const LogosBar = () => {

    const data = useStaticQuery(graphql`
    query{
      allFile(filter: {extension: {regex: "/(svg)|(png)/"}, relativeDirectory: {eq: "jstools"}}) {
        edges {
          node {
            id
            name
            publicURL
            extension
            childImageSharp{
              fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
 
    return (
        <>
        <div className="logoContainer">
          <div className="logos">
            {data.allFile.edges.map(edge => 
              {
                if (edge.node.extension === 'svg') {
                    return <img src={edge.node.publicURL} />
                }
              }
            )}
          </div>
           
        </div>
        </>
    )
}

LogosBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LogosBar
