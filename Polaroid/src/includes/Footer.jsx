import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="grid-container">
        <div className="item item2"></div>
        <div
          className="item item2 flex-col left-side"
          style={{ alignItems: "start", justifyContent: "start" }}
        >
          <div className="logo">
            <h3>Polaroid</h3>
            <h3>Store</h3>
            <a
              href="https://www.linkedin.com/in/brunogsilvaa/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="footer-icons" />
            </a>
            <a
              href="https://github.com/BrunoSilva077"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="footer-icons" />
            </a>
            <h4>Made by: Bruno Silva</h4>
          </div>
        </div>
        <div className="item item4"></div>
        <div className="item item2 right-side">
          <div className="logo flex-col" style={{ alignItems: "start" }}>
            <h3>Image fonts</h3>
            <a
              href="https://pt.pinterest.com/pin/774124928084861/"
              target="_blank"
              rel="noreferrer"
            >
              @Polaroid one about
            </a>
            <a
              href="https://www.pinterest.pt/pin/604256475017824412/"
              target="_blank"
              rel="noreferrer"
            >
              @Polaroid two about
            </a>
            <a
              href="https://www.pinterest.pt/pin/838584393095995153/"
              target="_blank"
              rel="noreferrer"
            >
              @Polaroid three about
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
