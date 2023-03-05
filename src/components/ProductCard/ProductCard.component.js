import "./ProductCard.styles.scss";

import { useContext } from "react";

import Button from "../Button/Button.component";

import { CartDropdownContext } from "../../contexts/cartDropdown.context";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartDropdownContext);

  return (
    <>
      <div className="product_card__container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addItemToCart}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
