import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}
export default AppRouter;
