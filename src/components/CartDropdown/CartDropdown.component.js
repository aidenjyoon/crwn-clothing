import "./CartDropdown.styles.scss";
import Button from "../Button/Button.component";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = () => {
  return (
    <>
      <div className="cart_dropdown__container">
        <div className="cart_items"></div>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropdown;
