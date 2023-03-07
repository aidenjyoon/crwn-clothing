import "./ProductCard.styles.scss";

import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";

import Button from "../Button/Button.component";

const ProductCard = (props) => {
  const { product } = props;
  const { id, name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartDropdownContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <>
      <div className="product_card__container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
