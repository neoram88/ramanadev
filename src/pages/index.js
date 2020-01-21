import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import  "./index.css"

const IndexPage = () => {

  // const pngImages = useStaticQuery(graphql`
  //   query {
  //     allImageSharp {
  //       edges {
  //         node {
  //           id
  //           fluid(maxWidth: 200, maxHeight: 200) {
  //               ...GatsbyImageSharpFluid
  //           }
  //         }
  //         publicURL
  //         extension
  //       }
  //     }
  //   }
  // `)

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
    <Layout>
      <SEO title="Home" />
      <Welcome/>
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
    </Layout>
  )
}

export default IndexPage
