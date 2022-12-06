import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import "./index.css";
import Chef from "./Chef";
import Menu from "./Menu";
import Weekly from "./Weekly";
import Contact from "./Contact";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Navbar className="container1"></Navbar>
      <Home></Home>
      <About></About>
      <Chef></Chef>
      <Menu></Menu>
      <Weekly></Weekly>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
