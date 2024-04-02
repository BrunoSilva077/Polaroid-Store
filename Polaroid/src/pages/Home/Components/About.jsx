import PropTypes from "prop-types";
export default function About({ path, alt, side }) {
    console.log(path, alt)
    return (
        <>
            {side === "left" ? (
                <div className="grid-container about">
                    <div className="item item2"></div>
                    <div className="item item4 about_image">
                        <img src={`${path}`} alt={`${alt}`} />
                    </div>
                    <div className="item item1"></div>
                    <div className="item item3 flex-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sit amet nisl purus in.
                            Urna nec tincidunt praesent semper feugiat nibh sed.
                        </p>
                    </div>
                    <div className="item item2"></div>
                </div>
            ) : (
                <div className="grid-container about">
                    <div className="item item2"></div>

                    <div className="item item3 flex-col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sit amet nisl purus in.
                            Urna nec tincidunt praesent semper feugiat nibh sed.
                        </p>
                    </div>
                    <div className="item item1"></div>
                    <div className="item item4 about_image">
                        <img src={`${path}`} alt={`${alt}`} />
                    </div>
                    <div className="item item2"></div>
                </div>)}

        </>
    )
}
About.propTypes = {
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
};


