import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard.component";
import "./CategoryPreview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category_preview__container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
