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
        <div className="text-white text-lg leading-loose text-center my-12">
            I have been working with JavaScript based libraries and frameworks for the past 5 years,
            mainly developing Hybrid Mobile Apps, Web Apps and PWAs.
            I specialize in Cross Platform App development, developing Android, 
            iOS and Web Apps using the same shared code base.
        </div>
        <div className="work-content">
            <div class="m-4 flex flex-wrap justify-center 
            lg:justify-around">
                <div class="text-center p-4">
                    <MobileImg style={{height:`30vh`,width:`30vh`}}/>
                </div>
                <div class="text-center p-4 my-auto">
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
            <div class="m-4 flex flex-wrap justify-center 
            lg:justify-around">
                <div class="text-center p-4">
                    <WebImg style={{height:`30vh`,width:`30vh`}}/>
                </div>
                <div class="text-center p-4 my-auto">
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
            <div>

            </div>
        </div>
    </Layout>
  )
}

export default WorkPage
