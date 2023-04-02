import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/ProductCard/ProductCard.component";
import "./Shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <>
            <h2>{title}</h2>
            <div className="product__container">
              {categoriesMap[title].map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Shop;
