
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
              fixed(width: 30) {
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
            {data.allFile.edges.map(edge => 
            {
            if (edge.node.extension === 'svg') {
                return <img src={edge.node.publicURL} />
            }
            return <Img fixed={edge.node.childImageSharp.fixed} />
            }
            )}
            {data.allFile.edges.map(edge => 
            {
            if (edge.node.extension === 'svg') {
                return <img src={edge.node.publicURL} />
            }
            return <Img fixed={edge.node.childImageSharp.fixed} />
            }
            )}
        </div>
        </>
    )
}

LogosBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LogosBar
