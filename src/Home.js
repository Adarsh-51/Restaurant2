import Image4 from './home.jpg'


const Home = () => {
    return (
        <section className="home" id="section1">
      <div className="container2">
        <div className="backgroundImage">
          <img src={Image4} alt="" width="100%" />
        </div>
        <p className="subhead"><span>Bea</span>trix</p>
        <p className="subhead1">Fresh,Clean & Delicious</p>
        </div>
        </section>
    );
}

export default Home;