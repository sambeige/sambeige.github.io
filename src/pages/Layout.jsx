import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-orange-100 font-sans">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
