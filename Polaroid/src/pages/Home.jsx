import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
        <NavBar />
        <div className="grid-container">
          <div className="item item1"></div>
          <div className="item item3">
            <div className="flex flex-col tittle">
              <h1>The Original is back</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ex quidem tempora adipisci molestias debitis.</p>
              <button className="btn btn-shop">Shop</button>
            </div>
          </div>
          <div className="item item7 img">
            <img src="public//Polaroid-removebg.png" alt="polaroid home" />
          </div>
        </div>
    </>
  )
}
