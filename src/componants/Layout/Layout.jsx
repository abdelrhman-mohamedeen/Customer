import React from "react";
import Navebar from "../Navebar/Navebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navebar />

      <Outlet></Outlet>

      <Footer />
    </>
  );
}

export default Layout;
