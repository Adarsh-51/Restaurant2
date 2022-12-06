const ChefItem = (props) => {
    return(
        <div className="col3">
              <div className="first">
                <div className="chefItem">
                  <img src={props.Image} alt="" height="300px" width="250px"/>
                  <p className="Name">{props.Name}</p>
                </div>
              </div>
        </div>
    );
}

export default ChefItem;