import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavBar({ aboutRef, contactRef }) {

  const scrollSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="grid-container">
      <div className="item item2">
        <div className="logo">
          <Link to="/">Polaroid</Link>
        </div>
      </div>
      <div className="item item6"></div>
      <div className="item item4 options">
        <Link to="/admin">Admin</Link>
        <Link to="/shop">
          Shop
        </Link>
        {aboutRef && contactRef != undefined ? (
          <>
            <a onClick={() => scrollSection(aboutRef)}>About</a>
            <a onClick={() => scrollSection(contactRef)}>Contact</a>
          </>
        ) : (
          <>
            <Link to="/" >About</Link>
            <Link to="/" >Contact</Link>
          </>
        )}
      </div>
    </div>
  );
}

NavBar.propTypes = {
  aboutRef: PropTypes.object,
  contactRef: PropTypes.object
};
