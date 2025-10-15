import { Outlet } from "react-router";
import Navber from "../components/Navber";
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navber />
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;