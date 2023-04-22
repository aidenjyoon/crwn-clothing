import Directory from "../../components/Directory/Directory.component";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
}

export default Home;
