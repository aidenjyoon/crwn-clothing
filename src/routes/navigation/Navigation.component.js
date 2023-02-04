import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo__container" to="/">
          <div className="logo">logo</div>
        </Link>
        <div className="nav_links__container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
        <h1>I'm the navbar</h1>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
