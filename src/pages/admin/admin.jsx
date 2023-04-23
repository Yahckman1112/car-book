import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SideBar from "./sideBar/sideBar";
import AdminAuth from "./AuthPage/AdminAuth";
import Dashboard from "./Dashboard/Dashboard";
import Drivers from "./drivers/drivers";
import Booking from "./bookings/booking";
import AdminForms from "./forms/forms";
// import Cars from "./cars/cars";
// import Blogs from "./blogs/blogs";
function AdminPage(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <SideBar />
        </div>

        <div style={{padding:'30px' , flex:1}}>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="booking" element={<Booking />} />
            <Route path="adminForms" element={< AdminForms />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
