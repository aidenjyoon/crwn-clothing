import "./ProductCard.styles.scss";
import Button from "../Button/Button.component";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  return (
    <>
      <div className="product_card__container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted">Add to card</Button>
      </div>
    </>
  );
};

export default ProductCard;
