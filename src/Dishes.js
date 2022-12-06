import './index.css';
import React from 'react';

const Dishes = (props) => {
    return (
        <div className="dishes">
                  <img
                    src={props.image}
                    alt="food"
                    width="150px"
                    height="150px"
                  />
                  <p className="dishesName">{props.dishname}</p>
        </div>
    );
}

export default Dishes;

