import "./Directory.styles.scss";
import CategoryItem from "../CategoryItem/CategoryItem.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory__container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
