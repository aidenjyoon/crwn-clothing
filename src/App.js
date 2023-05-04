import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

import Home from "./routes/home/Home.component";
import NavigationBar from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // as long as it's a valid user, createUserDocumnetFromAuth will verify whether or not it's a new user or not.
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user)); // either null or signed-in user
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
