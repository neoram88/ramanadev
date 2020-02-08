
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GitHubLogo from '../images/Github.svg'
import LinkedinLogo from '../images/Linkedin.svg'
import './contactBar.scss'

const ContactBar = () => {
    return (
        <>
            <div className="contactBar">
                <button className="bg-gray-300 hover:bg-ionicblue-400">
                    <GitHubLogo className="fill-white w-4 h-4 mr-2" />
                </button>
                <button className="bg-gray-300 hover:bg-ionicblue-400">
                    <LinkedinLogo className="fill-white w-4 h-4 mr-2" />
                </button>
            </div>
        </>
    )
}

ContactBar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContactBar
