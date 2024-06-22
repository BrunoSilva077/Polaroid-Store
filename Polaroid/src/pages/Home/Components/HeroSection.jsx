import { Link } from "react-router-dom";
export default function HeroSection() {
    return (
        <div className="grid-container home">
            <div className="item item2"></div>
            <div className="item item3">
                <div className="flex-col tittle">
                    <h1>The Original is back</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ex quidem tempora adipisci molestias debitis.</p>
                    <Link to="/shop" className="btn btn-shop link">Shop</Link> 
                </div>
            </div>
            <div className="item item5 img">
                <img src="./Polaroid-removebg.png" alt="polaroid home" />
            </div>
            <div className="item item2"></div>
        </div>
    )
}
