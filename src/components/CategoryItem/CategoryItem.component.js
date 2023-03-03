import "./CategoryItem.styles.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="category__container">
      <div className="background_img">
        <img src={category.imageUrl} alt={`${category.title}`} />
      </div>
      <div className="category__body_container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
