import CheckoutDescription from "../../components/CheckoutDescription/CheckoutDescription.component";
import "./Checkout.styles.scss";

const Checkout = () => {
  return (
    <>
      <div className="checkout__container">
        <div className="col_description">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>

        <CheckoutDescription />
      </div>
    </>
  );
};

export default Checkout;
