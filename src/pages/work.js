import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  "./work.scss"
import MobileImg from '../images/Mobile.svg'
import WebImg from '../images/web.svg'

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="Work" />
        <header style={{color: `#42A5F5`}}>
            <h2 style={{ margin: `0 auto`,width:`100px` }}> Work</h2>
        </header>
        <div className="text-white md:text-lg xl:text-xl 
        text-base leading-loose text-center my-8">
            <p>
                I have 5 years of professional experience working in IBM,
                developing Hybrid Mobile Apps, Web Apps and PWAs 
                with JavaScript based libraries and frameworks.
            </p>
            <p>
                I specialize in Cross Platform App development, developing Hybrid Android /
                iOS Apps and Web Apps using the same shared code base.
            </p>
        </div>
        <div className="work-content">
            <div className="m-4 flex flex-wrap justify-center 
            lg:justify-around">
                <div className="text-center">
                    <MobileImg style={{height:`30vh`,width:`30vh`}}/>
                </div>
                <div className="text-center my-auto">
                    <div className="text-xl">
                        <span className="text-secondary text-4xl" 
                        style={{fontFamily: `Montserrat SemiBold`}}> 4 </span>
                        <span className="text-light m-auto">
                            Apps with <span className="text-red"> Angular </span>
                            and <span className="text-ionicblue">Ionic</span>
                        </span>
                    </div>
                    <div className="text-xl">
                        <span className="text-secondary text-4xl"> 1 </span>
                        <span className="text-light m-auto">
                            Apps with <span className="text-reactblue"> ReactJS </span>
                            and IBM's Carbon Design
                        </span>
                    </div>
                </div>
            </div>
            <div className="m-4 flex flex-wrap justify-center 
            lg:justify-around">
                <div className="text-center">
                    <WebImg style={{height:`30vh`,width:`30vh`}}/>
                </div>
                <div className="text-center my-auto">
                    <div className="text-xl">
                        <span className="text-secondary text-4xl" 
                        style={{fontFamily: `Montserrat SemiBold`}}> 3 </span>
                        <span className="text-light m-auto">
                            Apps with <span className="text-red"> Angular </span>
                            <span className="text-ionicblue">Ionic</span> and 
                            <span className="text-nodegreeen"> NodeJS</span>
                        </span>
                    </div>
                    <div className="text-xl">
                        <span className="text-secondary text-4xl"> 1 </span>
                        <span className="text-light m-auto">
                            App with <span className="text-reactblue"> ReactJS </span>
                            and <span className="text-gatsbyblue"> Gatsby</span>
                        </span>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </Layout>
  )
}

export default WorkPage
