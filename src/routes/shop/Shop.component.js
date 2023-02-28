import { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.component";
import { ProductsContext } from "../../contexts/products.context";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <div className="product__container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Shop;
