import "./CartIcon.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const { totalNumberItems } = useContext(CartContext);

  return (
    <>
      <div className="cart_icon__container" onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping_icon" />
        <span className="item_count">{totalNumberItems}</span>
      </div>
    </>
  );
};

export default CartIcon;
