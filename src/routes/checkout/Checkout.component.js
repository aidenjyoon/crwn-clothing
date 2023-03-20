import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../contexts/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalNumberItems } = useContext(CartContext);
  return (
    <>
      <div className="checkout__container">
        <div className="checkout__header">
          <div className="header__block">
            <span>Product</span>
          </div>
          <div className="header__block">
            <span>Description</span>
          </div>
          <div className="header__block">
            <span>Quantity</span>
          </div>
          <div className="header__block">
            <span>Price</span>
          </div>
          <div className="header__block">
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map((cItem) => {
          return <CheckoutItem key={cItem.id} cartItem={cItem} />;
        })}
        {/* {cartItems.map((cItem) => {
        const { id, name, imageUrl, price, quantity } = cItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(cItem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cItem)}>increment</span>
          </div>
        );
      })} */}

        <span className="total">Total: {totalNumberItems}</span>
      </div>
    </>
  );
};

export default Checkout;
