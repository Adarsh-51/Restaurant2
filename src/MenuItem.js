const MenuItem = (props) => {
    return (
        <div className="items">
            <img src={props.Image} alt="" height="250px" width="450px"/>
              <div className="row">
                <div className="price">
                  {props.Name}
                </div>
                <div className="price design" >
                  {props.price}
                </div>
              </div>
          </div>
    );
}

export default MenuItem;