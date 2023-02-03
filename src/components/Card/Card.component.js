const Card = ({ category }) => {
  return (
    <div className="category-body-container">
      <div className="background-img" />
      <h1>{category}</h1>
      <p>Shop Now</p>
    </div>
  );
};

export default Card;
