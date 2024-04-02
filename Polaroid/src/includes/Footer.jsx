import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="grid-container">
                <div className="item item2"></div>
                <div className="item item2 flex-col left-side" style={{alignItems:"start", justifyContent: "start"}}>
                    <div className="logo">
                        <h3>Polaroid</h3>
                        <h3>Store</h3>
                        <FontAwesomeIcon icon={faInstagram} className='footer-icons'/>
                        <FontAwesomeIcon icon={faLinkedin} className='footer-icons' />
                        <FontAwesomeIcon icon={faGithub} className='footer-icons' />
                        <h4>Made by: Bruno Silva</h4>
                    </div>
                </div>
                <div className="item item4"></div>
                <div className="item item2 right-side">
                    <div className="logo flex-col" style={{alignItems:"start"}}>
                        <h3>Image fonts</h3>
                        <a>@Polaroid one</a>
                        <a>@Polaroid one</a>
                        <a>@Polaroid one</a>
                        <a>@Polaroid one</a>
                        <a>@Polaroid one</a>
                        <a>@Polaroid one</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}