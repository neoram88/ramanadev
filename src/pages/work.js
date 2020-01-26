import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  "./work.scss"
import MobileImg from '../images/Mobile.svg'

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="Work" />
        <header style={{color: `#42A5F5`}}>
            <h2 style={{ margin: `0 auto`,width:`100px` }}> Work</h2>
        </header>
        <div className="work-content">
            <div class="flex">
                <div class="flex-initial text-center p-4">
                    <MobileImg/>
                </div>
                <div class="flex-initial text-center p-4">
                    <span>
                        4 Apps with Angular and Ionic
                    </span>
                    <span>
                        1 App with ReactJS and IBM's Carbon Design
                    </span>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className="text-white text-xl">
            I have 7 years of experience as a software developer, all of which has been in IBM.
            I have been working with JavaScript based libraries and frameworks for the past 5 years,
            mainly developing Hybrid Mobile Apps, Web Apps and PWAs.
            I specialize in Cross Platform App development, developing Android, 
            iOS and Web Apps using the same shared code base
        </div>
    </Layout>
  )
}

export default WorkPage
