import NavBar from "../../includes/NavBar"
import Footer from "../../includes/Footer"
import { useLocation } from "react-router-dom";

export default function ProfileProduct() {
    const  location  = useLocation();
    const { product } = location.state;


  return (
    <>
    <NavBar/>
      <h1>Product Profile - {product.price}</h1>
    <Footer/>
    </>
  )
}
