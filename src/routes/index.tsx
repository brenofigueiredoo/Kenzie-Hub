import { Navigate, Route, Routes } from "react-router-dom";
import { CreateUser } from "../pages/CreateUser";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function RoutersMain() {
  const token = window.localStorage.getItem("authToken");

  return (
    <Routes>
      <Route path="/cadastrar" element={<CreateUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route
        path={"*"}
        element={
          token === null ? (
            <Navigate to={"/login"} />
          ) : (
            <Navigate to={"/home"} />
          )
        }
      />
    </Routes>
  );
}
