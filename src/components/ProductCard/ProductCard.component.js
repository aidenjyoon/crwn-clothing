import "./ProductCard.styles.scss";

import Button from "../Button/Button.component";

// import { CartDropdownContext } from "../../contexts/cartDropdown.context";

const ProductCard = (props) => {
  const { product, onClickHandler } = props;
  const { id, name, price, imageUrl } = product;

  return (
    <>
      <div className="product_card__container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={onClickHandler}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
