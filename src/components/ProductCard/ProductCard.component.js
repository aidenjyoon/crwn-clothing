import { Footer, ProductCardContainer } from "./ProductCard.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const ProductCard = (props) => {
  const { product } = props;
  const { id, name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <>
      <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </Footer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to cart
        </Button>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
