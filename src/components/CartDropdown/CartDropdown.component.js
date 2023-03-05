import "./CartDropdown.styles.scss";

import { useContext } from "react";

import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import { CartDropdownContext } from "../../contexts/cartDropdown.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartDropdownContext);

  return (
    <>
      <div className="cart_dropdown__container">
        <div className="cart_items">
          {cartItems.map((cartItem) => {
            return <CartItem cartItem={cartItem} />;
          })}
        </div>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropdown;
