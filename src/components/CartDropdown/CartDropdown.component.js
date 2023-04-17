import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles";

import { useContext } from "react";

import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const navToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer id="CartDropdown__container">
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cItem) => {
            return <CartItem key={cItem.key} cartItem={cItem} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
