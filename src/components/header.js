import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          <li>
            <Link to={`/`}>Mono</Link>
          </li>
          <li>
            <Link to={`/bio`}>Bio</Link>
          </li>
          <li>
            <Link to={`/gallery`}>Gallery</Link>
          </li>
          <li>
            <Link to={`/travel`}>Travel</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
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
