import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./Navigation.styles.scss";
const NavigationBar = () => {
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
          <Link className="nav_link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
