import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{color: `white`, textShadow: `none`,backgroundImage: `none` }}>{props.children}</Link>
  </li>
)
const Header = ({ siteTitle }) => (
  <header style={{ background: `#3d4551`, marginBottom: `1.5rem`, padding: `1rem`, fontFamily: `Roboto Slab` }}>
  <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.0875rem 1.0875rem`,
      }}
    >
  <Link to="/" style={{  color: `white`,
            textDecoration: `none`,backgroundImage: `none` }}>
    <div style={{ display: `inline`, fontSize: `1.8rem`, textShadow: `none`}}>{siteTitle}</div>
  </Link>
  <ul style={{ listStyle: `none`, float: `right`, color: `white`}}>
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
