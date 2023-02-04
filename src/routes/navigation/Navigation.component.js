import { Outlet, Link } from "react-router-dom";

<<<<<<< Updated upstream
=======
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./Navigation.styles.scss";
>>>>>>> Stashed changes
const NavigationBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo__container" to="/">
<<<<<<< Updated upstream
          <div className="logo">logo</div>
        </Link>
        <div className="nav_links__container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
        <h1>I'm the navbar</h1>
=======
          <CrwnLogo />
        </Link>
        <div className="nav_links__container">
          <Link className="nav_link" to="/shop">
            SHOP
          </Link>
          <Link className="nav_link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
>>>>>>> Stashed changes
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
