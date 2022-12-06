import MenuItem from "./MenuItem";
import Image11 from "./Image/food12.jpg"
import Image12 from "./Image/food11.jpg"
import Image13 from "./Image/food10.jpg"
import Image14 from "./Image/food9.jpg"
import Image15 from "./Image/food8.jpg"
import Image16 from "./Image/food7.jpg"
import Image17 from "./Image/food6.jpg"
import Image18 from "./Image/food5.jpg"
import Image19 from "./Image/food4.jpg"

const Menu = () => {
    return (
        <section className="menu" id="section4">
        <div className="container5">
        <div className="row">
          <div className="col6">
            <h4 className="menu1">Our Menus</h4>
            <p className="small">Loved by people</p>
          </div>
        </div>
        </div>
        <div className="menuItem">
            <div className="row">
                <MenuItem Image={Image11} Name="Pan Fried Noodles" price="5$"></MenuItem>
                <MenuItem Image={Image12} Name="Lorem ipsum dolor" price="10$"></MenuItem>
                <MenuItem Image={Image13} Name="Sicilian Pizza" price="2$"></MenuItem>
                <MenuItem Image={Image14} Name="Lorem ipsum dolor" price="14$"></MenuItem>
                <MenuItem Image={Image15} Name="Butter Chicken Twin Burgers" price="2$"></MenuItem>
                <MenuItem Image={Image16} Name="Lorem ipsum dolor" price="20$"></MenuItem>
                <MenuItem Image={Image17} Name="Chicken Lollipop" price="8$"></MenuItem>
                <MenuItem Image={Image18} Name="Lorem ipsum dolor" price="5$"></MenuItem>
                <MenuItem Image={Image19} Name="Papdi Chat" price="7$"></MenuItem>
            </div>
        </div>
        </section>
    );
}

export default Menu;