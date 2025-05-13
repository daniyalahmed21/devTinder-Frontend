import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="mt-5 max-w-4xl mx-auto w-full">
        <Navbar />
      </header>
      <main className="flex justify-center items-center max-w-4xl mx-auto w-full mt-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Body;
