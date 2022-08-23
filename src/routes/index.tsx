import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { CreateUser } from "../pages/CreateUser";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function RoutersMain() {
  return (
    <Routes>
      <Route path="/cadastrar" element={<CreateUser />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
