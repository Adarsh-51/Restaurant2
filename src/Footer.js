import Image30 from "./Image/icon1.jpg"
import Image31 from "./Image/icon2.jpg"
import Image32 from "./Image/icon3.jpg"
import Image33 from "./Image/icon4.jpg"



const Footer = () => {
    return (
        <footer className="end">
      <div className="row">
        <div className="col4">
          <h3>Find Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet</p>
          <p>a consectetur magnam ea saepe vero pariatur voluptatibus aliquid harum</p>
        </div>
        <div className="col4">
          <h3>Reservation</h3>
          <p>090-080-0650 | 090-070-0430</p>
          <p>info@gcompany.com</p>
          <p>LINE eatery247</p>
        </div>
        <div className="col4">
          <h3>Open Hours</h3>
          <p>Monday Closed</p>
          <p className="foot">Tuesday to Friday</p>
          <p className="foot1">7:00 AM - 9:00 PM</p>
          <p className="foot">Saturday - Sunday</p>
          <p className="foot1">11:00 AM - 10:00 PM</p>
        </div>
        <div className="col4">
          <img src={Image30} alt="" className="icon" width="30px" height="30px"/>
          <img src={Image31} alt="" className="icon" width="30px" height="30px"/>
          <img src={Image32} alt="" className="icon" width="30px" height="30px"/>
          <img src={Image33} alt="" className="icon" width="30px" height="30px"/>
          <p>Copyright © 2018</p>
          <p>~ Beatrix.co</p>
          <button className="top">
            <a href="#section0">Back to top</a>
          </button>
        </div>
      </div>
    </footer>
    );
}

export default Footer;