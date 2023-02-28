import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <>
      <div className="cart_icon__container">
        <ShoppingIcon className="shopping_icon" />
        <span className="item_count">0</span>
      </div>
    </>
  );
};

export default CartIcon;
