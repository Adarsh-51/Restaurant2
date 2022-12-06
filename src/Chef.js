import ChefItem from "./ChefItem"
import Image9 from "./Image/download.jpg"
import Image10 from "./Image/download1.jpg"
import Image11 from "./Image/download3.jpg"


const Chef = () => {
    return(
        <section className="chef" id="section3">
        <div className="container4">
          <div className="row">
            <div className="col2">
              <div className="intro">
                <h3>Meet our Chefs</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <ChefItem Image={Image9} Name="Grant Achatz"></ChefItem>
            <ChefItem Image={Image10} Name="Nicolas Appert"></ChefItem>
            <ChefItem Image={Image11} Name="James Beard"></ChefItem>
            {/* <div className="col3">
              <div className="first">
                <div className="chefItem">
                  <img src="Image/download.jpg" alt="" height="300px" width="250px"/>
                  <p className="Name">Grant Achatz</p>
                </div>
              </div>
            </div>
              <div className="col3">
                  <div className="first">
                    <div className="chefItem">
                      <img src="Image/download1.jpg" alt="" height="300px" width="250px"/>
                      <p className="Name">Nicolas Appert</p>
                    </div>
                  </div>
              </div>
              <div className="col3">
                  <div className="first">
                      <div className="chefItem">
                          <img src="Image/download3.jpg" alt="" height="300px" width="250px"/>
                          <p className="Name">James Beard.</p>
                      </div>
                  </div>
              </div> */}
        </div>
      </div>
      </section>
    );
}

export default Chef;