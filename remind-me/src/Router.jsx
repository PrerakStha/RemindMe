import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import UpcomingPage from "../pages/UpcomingPage";
import EditPage from "../pages/EditPage";
import MainLayout from "../layouts/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="upcoming" element={<UpcomingPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="edit/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
