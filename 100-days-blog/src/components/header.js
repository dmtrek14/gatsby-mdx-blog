import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, color: `white` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const Header = ({ siteTitle }) => (
  <header style={{ background: `#3d4551`, marginBottom: `1.5rem`, padding: `1rem` }}>
  <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
  <Link to="/" style={{  color: `white`,
            textDecoration: `none`, }}>
    <div style={{ display: `inline`, fontSize: `1.5rem` }}>{siteTitle}</div>
  </Link>
  <ul style={{ listStyle: `none`, float: `right`, color: `white`,
            textDecoration: `none`, }}>
    
    <ListLink to="/about/">About</ListLink>
  </ul></div>
</header>


 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
