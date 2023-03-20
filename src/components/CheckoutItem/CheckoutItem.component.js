import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => {
    return addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    return removeItemFromCart(cartItem);
  };

  const clearItemHandler = () => {
    return clearItemFromCart(cartItem);
  };

  return (
    <>
      <div className="checkout_item__container">
        <div className="image__container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={removeItemHandler}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={addItemHandler}>
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove__button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
