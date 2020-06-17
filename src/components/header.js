import PropTypes from "prop-types"
import React from "react"

import MonoLogo from '../images/favicon.jpg';

const Header = () => (
  <header
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={MonoLogo}
        style={{
          maxWidth: 100,
          borderRadius: 50,
          marginBottom: 0
        }}
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
