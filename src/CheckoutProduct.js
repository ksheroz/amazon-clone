import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

// function CheckoutProduct({ id, image, title, price, rating }) {
//   const [{ basket }, dispatch] = useStateValue();

//   const FunctionalCheckoutProduct = forwardRef((props, ref) => (
//     <div ref={ref}>{props.title}</div>
//   ));

//   const removeFromBasket = () => {
//     //Remove the item from the basket
//     dispatch({
//       type: "REMOVE_FROM_BASKET",
//       id: id,
//     });
//   };
//   return (
//     <div className="checkoutProduct">
//       <img className="checkoutProduct__image" src={image} />

//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{title}</p>
//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="checkoutProduct__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>⭐</p>
//             ))}
//         </div>
//         <button onClick={removeFromBasket}>Remove from Basket</button>
//       </div>
//     </div>
//   );
// }

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
      //Remove the item from the basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
