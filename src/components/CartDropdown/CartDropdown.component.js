import "./CartDropdown.styles.scss";
import Button from "../Button/Button.component";

const CartDropdown = () => {
  return (
    <>
      <div className="cart_dropdown__container">
        <div className="cart_items">
          <Button>GO TO CHECKOUT</Button>
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
