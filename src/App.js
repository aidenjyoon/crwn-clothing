<<<<<<< Updated upstream
import Directory from "./components/Directory/Directory.component";
=======
import Home from "./routes/home/Home.component";
import NavigationBar from "./routes/navigation/Navigation.component";
import SignIn from "./routes/sign-in/SignIn.component";
import { Routes, Route, Outlet } from "react-router-dom";
>>>>>>> Stashed changes

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <Directory categories={categories} />
=======
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
