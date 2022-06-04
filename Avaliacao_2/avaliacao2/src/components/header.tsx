import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.css"

const Header = () => (
  <header>
    <div className="container head">
      <Link to="/">
        <StaticImage
          src="../images/logo.png"
          loading="eager"
          alt="Smash Vôlei"
          width={180}
        />
      </Link>
      <Link to="/">
        <StaticImage
          src="../images/shopping-cart.png"
          loading="eager"
          alt="Carrinho"
          width={36}
        />
      </Link>
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
