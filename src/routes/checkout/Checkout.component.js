import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  HeaderBlock,
  CheckoutHeader,
  Total,
} from "./Checkout.styles";

const Checkout = () => {
  const { cartItems, totalNumberItems, totalPrice } = useContext(CartContext);
  return (
    <>
      <CheckoutContainer id="CheckoutContainer">
        <CheckoutHeader id="CheckoutHeader">
          <HeaderBlock id="HeaderBlock">
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock id="HeaderBlock">
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock id="HeaderBlock">
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock id="HeaderBlock">
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock id="HeaderBlock">
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>

        {cartItems.map((cItem) => {
          return <CheckoutItem key={cItem.id} cartItem={cItem} />;
        })}

        <Total id="Total">Total: {totalPrice}</Total>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
