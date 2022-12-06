import Image5 from './Image/food1.jpg'
import Image6 from './Image/food2.jpg'
import Image7 from './Image/food3.jpg'
import Image8 from './Image/food4.jpg'
import Dishes from './Dishes'


const About = () => {
    return (
        <section className="about" id="section2">
        <div className="container3">
        <div className="row">
          <div className="col1">
            <div className="leftClasscontent">
              <h4>About Us</h4>
              <h2>A taste you'll remember</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laudantium excepturi officia aliquam nihil consectetur quam
                similique! Quo nulla expedita molestiae?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti dolores, dolore, quia mollitia nulla asperiores nihil
                fuga laboriosam provident maiores nobis molestiae animi.
              </p>
              <br />
              <p className="text">Wide options of choice</p>
              <a href="#section4"> <button>Check our menu</button> </a>
            </div>
          </div>
          <div className="col1">
            <div className="rightClasscontent">
              <h2>Some of our top rated dishes</h2>
              <h5>Who are in extremely love with the eco-friendly system</h5>
              <div className="row">
                <Dishes image={Image5} dishname="lorem ipsum"/>
                <Dishes image={Image6} dishname="lorem ipsum"/>
                <Dishes image={Image7} dishname="lorem ipsum"/>
                <Dishes image={Image8} dishname="lorem ipsum"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;