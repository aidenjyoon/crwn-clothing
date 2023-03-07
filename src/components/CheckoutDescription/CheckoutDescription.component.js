import "./CheckoutDescription.styles.scss";

const CheckoutDescription = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <>
      <img src={imageUrl} alt={`${name}`} />
      <span className="description">{name}</span>

      <div className="checkout_quantity__container">
        <button onClick={decrementQuant}>decrement</button>
        <span className="quantity">{quantity}</span>
        <button onClick={incrementQuant}>increment</button>
      </div>

      <span className="price">{price}</span>
    </>
  );
};

export default CheckoutDescription;
