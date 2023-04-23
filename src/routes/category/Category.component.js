import { CategoryTitle, CategoryProductsContainer } from "./Category.styles";

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/ProductCard/ProductCard.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle id="CategoryTitle">{category.toUpperCase()}</CategoryTitle>
      <CategoryProductsContainer id="CategoryProductsContainer">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </CategoryProductsContainer>
    </>
  );
};

export default Category;
