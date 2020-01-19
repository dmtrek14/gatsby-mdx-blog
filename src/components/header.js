import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (

<header>
  <nav>
    <hr/>
    <div className="siteTitle">
      <Link to="/">
        <div>{siteTitle}</div>
     </Link>
    </div>
    <hr/>
    <div className="about">
      <Link to="/about/">About</Link>
    </div>
    <hr/>
  </nav>
</header>

 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
