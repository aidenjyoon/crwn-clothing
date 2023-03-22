import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../contexts/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartItems, totalNumberItems, totalPrice } = useContext(CartContext);
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

        <span className="total">Total: {totalPrice}</span>
      </div>
    </>
  );
};

export default Checkout;
