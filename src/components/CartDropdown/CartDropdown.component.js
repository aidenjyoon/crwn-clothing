import "./CartDropdown.styles.scss";

import { useContext } from "react";

import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import { CartContext } from "../../contexts/cart.context";
import { Link, useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const navToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart_dropdown__container">
        <div className="cart_items">
          {cartItems.map((cItem) => {
            return <CartItem key={cItem.key} cartItem={cItem} />;
          })}
        </div>
        <Link to="/checkout">
          <Button onClick={navToCheckoutHandler}>GO TO CHECKOUT</Button>
        </Link>
      </div>
    </>
  );
};

export default CartDropdown;
