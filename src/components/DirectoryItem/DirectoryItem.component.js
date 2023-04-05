import "./DirectoryItem.styles.scss";

const DirectoryItem = ({ category }) => {
  return (
    <div className="directory_category__container">
      <div className="background_img">
        <img src={category.imageUrl} alt={`${category.title}`} />
      </div>
      <div className="directory__body_container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
