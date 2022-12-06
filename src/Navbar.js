import Image1 from './Image/RestLogo1.jpg'
import Image2 from './Image/menu.svg'
import Image3 from './Image/reject.png'

const Navbar = () => {


 


    return (
        <nav className="navbar"  id="section0">
          <img src={Image1} className='restLogo' alt="restLogo" />
          <a href="#section1" className="restName">Beatrix</a>
          <img id="mobile-cta" className="mobile-menu" src={Image2} alt="Open Navigation"  />
          <img id="mobile-exit" className="mobile-menu-exit" src={Image3} width="30" alt="Close Navigation"/>
          <ul className="option-menu">
            <li className="present">
              <a href="#section1">Home</a>
            </li>
            <li className="present">
              <a href="#section2">About Us</a>
            </li>
            <li className="present">
              <a href="#section3">Chef</a>
            </li>
            <li className="present">
              <a href="#section4">Menu</a>
            </li>
            <li className="present">
              <a href="#contact">Contact Us</a> 
              </li>
          </ul>
        </nav>

    );
}

export default Navbar;