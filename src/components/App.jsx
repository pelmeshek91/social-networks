import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import { lazy } from "react";

const CardsPage = lazy(() => import("../pages/CardsPage/CardsPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<CardsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
