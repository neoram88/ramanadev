
import React from "react"
import PropTypes from "prop-types"
import GitHubLogo from '../images/Github.svg'
import LinkedinLogo from '../images/Linkedin.svg'
import './contactBar.scss'

const ContactBar = () => {
    return (
        <>
            <div className="contactBar">
                <a href="https://github.com/neoram88" target="_blank">
                    <button className="">
                        <GitHubLogo className="opacity-50 fill-white h-5 mr-2 hover:opacity-100" />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/vrlj/" target="_blank">
                    <button className="">
                        <LinkedinLogo className="opacity-50 fill-white h-5 mr-2 hover:opacity-100" />
                    </button>
                </a>
            </div>
        </>
    )
}

export default ContactBar
