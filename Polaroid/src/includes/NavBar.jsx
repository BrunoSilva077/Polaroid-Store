import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavBar({ aboutRef, contactRef }) {

  const scrollSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="grid-container">
        <div className="item item2">
            <div className="logo">
                <Link to="/">Polaroid</Link>
            </div>
        </div>
        <div className="item item6"></div>
        <div className="item item4 options">
          <a>Admin</a>
          <Link to="/shop">Shop</Link>
          <a onClick={() => scrollSection(aboutRef)} >About</a>
          <a onClick={() => scrollSection(contactRef)} >Contact</a>
        </div>
    </div>
  )
}

NavBar.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};