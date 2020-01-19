import PropTypes from "prop-types"
import React from "react"
import TextLoop from "react-text-loop";

const Welcome = ({ siteTitle }) => (
  <header
    style={{
      color: `#42A5F5`
    }}
  >
    <h2 style={{ margin: 0 }}>
    <TextLoop>
        {siteTitle.map((title)=>
        {return title}
        )}
    </TextLoop>
    </h2>
  </header>
)

Welcome.propTypes = {
  siteTitle: PropTypes.array,
}

Welcome.defaultProps = {
  siteTitle: ['svagatham','bonjour','welcome'],
}

export default Welcome
