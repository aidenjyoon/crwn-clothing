import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./Navigation.styles.scss";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Failed to Sign Out.", error);
    }
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo__container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav_links__container">
          <Link className="nav_link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav_link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav_link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
