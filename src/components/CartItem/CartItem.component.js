import "./CartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <>
      <div className="cart_item__container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="item_details">
          <span className="name">{name}</span>
          <span className="price">${quantity * price}</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
