import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
  return (
    <>
      {SHOP_DATA.map((product) => {
        const { id, name } = product;
        return <h1 key={id}>{name}</h1>;
      })}
    </>
  );
};

export default Shop;
