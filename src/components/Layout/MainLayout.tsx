import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import ScrollToTop from "../Shared/Ui/ScrollToTop";

const MainLayout = () => {
  return (
    <ScrollToTop>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ScrollToTop>
  );
};

export default MainLayout;
