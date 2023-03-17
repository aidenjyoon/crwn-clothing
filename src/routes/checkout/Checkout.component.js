import { useContext } from "react";
import CheckoutDescription from "../../components/CheckoutDescription/CheckoutDescription.component";
import { CartContext } from "../../contexts/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <>
      <h1>checkout page</h1>
      {cartItems.map((cItem) => {
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
      })}
    </>
  );
};

export default Checkout;
