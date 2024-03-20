import NavBar from "../../includes/NavBar";

export default function Home() {
  return (
    <>
        <NavBar />
        <section>
          <div className="grid-container home">
            <div className="item item1"></div>
            <div className="item item3">
              <div className="flex-col tittle">
                <h1>The Original is back</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ex quidem tempora adipisci molestias debitis.</p>
                <button className="btn btn-shop">Shop</button>
              </div>
            </div>
            <div className="item item8 img">
              <img src="./Polaroid-removebg.png" alt="polaroid home" />
            </div>
          </div>
        </section>
        <section>
            <div className="new-arrivals tittle">
              <h3>New Arrivals</h3>
            </div>
          <div className="grid-container horizontal-scroll">              
              <div className="item item3">
                <div className="flex-col product-home">
                  <div className="product-image">
                    <img src="./Polaroid-removebg.png" alt="polaroid" />
                  </div>
                    <h3>Camera 1</h3>
                    <p>$100</p>
                </div>
              </div>
              <div className="item item3">
                <div className="flex-col product-home">
                  <div className="product-image">
                    <img src="./Polaroid-removebg.png" alt="polaroid" />
                  </div>
                    <h3>Camera 1</h3>
                    <p>$100</p>
                </div>
              </div>
              <div className="item item3">
                <div className="flex-col product-home">
                  <div className="product-image">
                    <img src="./Polaroid-removebg.png" alt="polaroid" />
                  </div>
                    <h3>Camera 1</h3>
                    <p>$100</p>
                </div>
              </div>
              <div className="item item3">
                <div className="flex-col product-home">
                  <div className="product-image">
                    <img src="./Polaroid-removebg.png" alt="polaroid" />
                  </div>
                    <h3>Camera 1</h3>
                    <p>$100</p>
                </div>
              </div>
          </div>
      </section>
        <section>
            <div className="new-arrivals tittle">
              <h3>About</h3>
            </div>
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
                  <img src="./1st_about.jpg" alt="1st_about" />
                </div>
                <div className="item item2"></div>
                
                <div className="item item2"></div>
                <div className="item item4 about_image">
                  <img src="./2nd_about.jpg" alt="1st_about" />
                </div>
                <div className="item item1"></div>
                  <div className="item item3 flex-col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                      dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sit amet nisl purus in. 
                      Urna nec tincidunt praesent semper feugiat nibh sed.
                    </p>
                  </div>
                <div className="item item2"></div>

                <div className="item item2"></div>
                <div className="item item3 flex-col">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Sit amet nisl purus in. 
                    Urna nec tincidunt praesent semper feugiat nibh sed.
                  </p>
                </div>
                <div className="item item1"></div>
                <div className="item item4 about_image">
                  <img src="./3rd_about.jpg" alt="1st_about" />
                </div>
                <div className="item item2"></div>
          </div>
        </section>
    </>
  )
}