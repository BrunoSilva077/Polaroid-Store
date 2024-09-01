import PropTypes from "prop-types";
// import { useEffect } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar({ aboutRef, contactRef }) {
  // const [about, setAbout] = useState();
  // const [contact, setContact] = useState();
  // if(aboutRef != undefined) setAbout(aboutRef);
  // if(contactRef != undefined) setContact(contactRef);
  // console.log(about,"about ref" + aboutRef);
  // console.log("contact state -" +contact);

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
        {/* <Link to={{
          pathname: "/shop",
          state: {
            items: items
          }
        }}>Shop</Link> */}
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
  aboutRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};
