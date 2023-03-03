import "./CartIcon.styles.scss";

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartDropdownContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="cart_icon__container" onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping_icon" />
        <span className="item_count">0</span>
      </div>
    </>
  );
};

export default CartIcon;
