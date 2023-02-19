import Home from "./routes/home/Home.component";
import NavigationBar from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
import { Routes, Route, Outlet } from "react-router-dom";

const ShopPage = () => {
  return <h1>I'm shop page</h1>;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
