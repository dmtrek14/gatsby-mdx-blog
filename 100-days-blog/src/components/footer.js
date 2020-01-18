import React from "react"

const Footer = () => (
<footer>
<div className="builtBy">
© {new Date().getFullYear()}, Built with
          {` `}
          <a className="lcars-link-button-purple" href="https://www.gatsbyjs.org">Gatsby</a>&nbsp;
           by &nbsp;
           <a className="lcars-link-button-light-blue" href="https://github.com/dmtrek14">@dmtrek14</a>
</div>

 </footer>
 
)


export default Footer
