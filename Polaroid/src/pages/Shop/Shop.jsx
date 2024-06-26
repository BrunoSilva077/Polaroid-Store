import NavBar from "../../includes/NavBar"
import Footer from "../../includes/Footer"
import ProductCard from "../Home/Components/ProductCard"
import { Link } from "react-router-dom"

const items = [
  {
    id: 1,
    product: "Polaroid Camera 1",
    price: "$100",
    image: "./Polaroid-removebg.png",
  },
  {
    id: 2,
    product: "Polaroid Camera 2",
    price: "$100",
    image: "./Polaroid-removebg.png",
  },
  {
    id: 3,
    product: "Polaroid Camera 3",
    price: "$100",
    image: "./Polaroid-removebg.png",
  },
  {
    id: 4,
    product: "Polaroid Camera 4",
    price: "$100",
    image: "./Polaroid-removebg.png",
  },
  {
    id: 5,
    product: "Polaroid Camera 5",
    price: "$100",
    image: "./Polaroid-removebg.png",
  },
  {
    id: 6,
    product: "Polaroid Camera 6",
    price: "$100",
    image: "./Polaroid-removebg.png",
  },
  {
    id: 7,
    product: "Polaroid Camera 7",
    price: "$100",
    image: "./Polaroid-removebg.png",
  },
  {
    id: 8,
    product: "Polaroid Camera 8",
    price: "$100",
    image: "./Polaroid-removebg.png",
  }
]

export default function Shop() {
  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div className="item item2">
          <p>{items.length} products</p>
        </div>
        <div className="item item10"></div>
        {items.map((item) => (
          // <Link to={{
          //   pathname: `/shop/${item.id}`,
          //   state: { product: item }
          // }} key={item.id} className="item item3 link" style={{color: "black"}}>
          //   <ProductCard key={item.id} item={item} />
          // </Link>
          
          <Link to={`/shop/${item.id}`} state={{ product: item }} key={item.id} className="item item3 link" style={{ color: "black" }}>
            <ProductCard key={item.id} item={item} />
          </Link>

          //<ProductCard key={item.id} item={item} />
        ))}
        <br />
        <br />
      </div>
      <Footer />
    </>
  )
}
