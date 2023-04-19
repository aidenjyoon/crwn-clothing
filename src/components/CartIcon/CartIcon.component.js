import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const { totalNumberItems } = useContext(CartContext);

  return (
    <>
      <CartIconContainer id="CartIconContainer" onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount>{totalNumberItems}</ItemCount>
      </CartIconContainer>
    </>
  );
};

export default CartIcon;
