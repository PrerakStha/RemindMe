import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <section className="py-24 container mx-auto px-4">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;