import Card from "./components/Card/Card.component";

const categories = [
  {
    id: 1,
    title: "Hat",
  },
  {
    id: 2,
    title: "Jackets",
  },
  {
    id: 3,
    title: "Sneakers",
  },
  {
    id: 4,
    title: "Womens",
  },
  {
    id: 5,
    title: "Mens",
  },
];

function App() {
  return (
    <>
      <div className="categories-container">
        {categories.map((category) => {
          return <Card category={category.title} />;
        })}
      </div>
    </>
  );
}

export default App;
