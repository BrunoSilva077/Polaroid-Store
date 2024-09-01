import NavBar from "../../includes/NavBar"
import Footer from "../../includes/Footer"
import ProductCard from "../Home/Components/ProductCard"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Shop() {
  
  const [products,setProducts] = useState([])

  useEffect(() =>{
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, [])

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div className="item item2">
          <p>{products.length} products</p>
        </div>
        <div className="item item10"></div>
        {products.map((item) => (
          <Link to={`/shop/${item.id}`} state={{ product: item }} key={item.id} className="item item3 link" style={{ color: "black" }}>
            <ProductCard key={item.id} item={item} />
          </Link>
        ))}
        <br />
        <br />
      </div>
      <Footer />
    </>
  )
}
