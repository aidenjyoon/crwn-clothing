import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";
import { ProductsContext } from "../../contexts/products.context";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const { addItemToCart } = useContext(CartDropdownContext);

  return (
    <>
      <div className="product__container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onClickHandler={addItemToCart(product)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shop;
