import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./sideBar/sideBar";
import AdminAuth from "./AuthPage/AdminAuth";
// import Cars from "./cars/cars";
// import Blogs from "./blogs/blogs";
function Admin(props) {
  return (
    <div>

        < AdminAuth/>





        
      {/* <SideBar />

      <Routes>
        <Route path="/cars" element={<Cars />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes> */}
    </div>
  );
}

export default Admin;
