const Contact = () => {
  return (
    <section id="contact">
      <div className="contact2">Contact Us</div>
      <div className="contact1">
        <div className="row-contact">
          <div className="contactUs1">
            <div className="contactUs">We're Here to Help !</div>
            <div className="text1">
              We're friendly and available to chat. Reach out to us anytime and
              we'll happily answer your questions.
            </div>
            <div className="button2">
              <button> PRODUCT SUPPORT </button>
              <button className="button3"> LOCATION </button>
              <div className="number">
                <div className="number1">
                  <span className="text20">Phone Numbers</span>
                  <br /> 080-090-0990 <br /> 080-090-0880
                </div>
                <div className="number2">
                    <span className="text20">Emails</span>
                    <br /> hello@company.com <br /> info@company.com
                </div>
              </div>
            </div>
          </div>
          </div>
         <div className="row-contact2">
            <div className="container11">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
              <hr/>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
            <hr/>

            <button type="submit" className="registerbtn">Register</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
