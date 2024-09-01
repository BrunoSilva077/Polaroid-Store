import NavBar from "../../includes/NavBar";
import Footer from "../../includes/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ProductCard from "./Components/ProductCard";
import HeroSection from "./Components/HeroSection";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const about = useRef(null);
  const contact = useRef(null);
  const [products,setProducts] = useState([]);

  useEffect(() =>{
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  },[])
  
  return (
    <>
      <NavBar aboutRef={about} contactRef={contact} />
      <section>
        <HeroSection />
      </section>
      <section>
        <div className="new-arrivals tittle">
          <h3>New Arrivals</h3>
        </div>
        <div className="grid-container horizontal-scroll">
          {products.map((item) => {
            return <Link to={`/shop/${item.id}`} state={{ product: item }} key={item.id} className="item item3 link" style={{ color: "black" }}>
            <ProductCard key={item.id} item={item} />
          </Link>
          })}
        </div>
      </section>
      <section ref={about}>
        <div className="new-arrivals tittle">
          <h3>About</h3>
        </div>
        <About path={"./1st_about.jpg"} alt={"1st_about"} side={"rigth"}/>
        <About path={"./2nd_about.jpg"} alt={"2nd_about"} side={"left"}/>
        <About path={"./3rd_about.jpg"} alt={"3rd_about"} side={"rigth"}/>
      </section>
      <section ref={contact}>
        <Contact />
      </section>
      <Footer />
    </>
  )
}