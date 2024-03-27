import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="grid-container">
                <div className="item item2"></div>
                <div className="item item2 flex-col" style={{alignItems:"start"}}>
                    <div className="logo">
                        <h3>Polaroid</h3>
                        <h3>Store</h3>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
            </div>
        </footer>

    )
}