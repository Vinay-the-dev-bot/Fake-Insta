import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/login";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
