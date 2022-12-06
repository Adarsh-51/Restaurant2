


const Special = (props) => {
    return (
        <div className="col10">
              <div className="row">
                <div className="contain1">
                  <img src={props.Image} alt="" width="180px" height="150px"/>
                </div>
                <div className="contain2">
                  <p className="bold">{props.Name} </p>
                  {props.description}
                </div>
                <div className="contain3">
                  {props.price}
                </div>
              </div>
            </div>
    );
}

export default Special;