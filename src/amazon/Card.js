import React from "react";
import { useMyContext } from './MyContext';

function Card(props) {

    const { count, setCount } = useMyContext();

    const incrementCount = () => {
      setCount(count + 1);
    };

    return(
          
           <div className="product-card">
            <img src={props.productPic} /> 
            <div>
           <h3>{props.productName}</h3>
           <div className="product-price">
           <i className="bi bi-currency-rupee"></i>
           <h4>399</h4>
        
           </div>

            </div>
            <button onClick={incrementCount} >Add +</button>
            
           </div>
          
    )
}

export default Card

