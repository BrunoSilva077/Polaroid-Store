import NavBar from "../../includes/NavBar"
import Footer from "../../includes/Footer"
import { useLocation } from "react-router-dom";

export default function ProfileProduct() {
    const  location  = useLocation();
    const { product } = location.state;
    console.log(product);
  return (
    <>
    <NavBar/>
    <div className="grid-container">
      <div className="item item1"></div>
      <div className="item item5 img">
        <img src={`${product.image}`} alt="polaroid" />
      </div>
      <div className="item item3">
        <div className="flex-col productProfile">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-contact">Edit</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
