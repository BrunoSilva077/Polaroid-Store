import NavBar from "../../includes/NavBar";
import Footer from "../../includes/Footer";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ProductCard from "./Components/ProductCard";
import HeroSection from "./Components/HeroSection";
import { useRef } from "react";

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
  }
]

export default function Home() {
  const about = useRef(null);
  const contact = useRef(null);
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
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
          {items.map((item) => {
            return <ProductCard key={item.id} item={item} />
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