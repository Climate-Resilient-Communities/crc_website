import Footer from "@/components/Footer";
import React from "react";
import TableComponent from "@/components/TableComponent";
import Navbar from "@/components/NavBar";

export default function Contributor() {
    return (
        <div className="flex flex-col min-h-screen">
        
        <Navbar />
        {/* Space behind navbar */}
        <div className="z-10 h-20 max-w-5xl w-full"></div>

        <div className="flex-grow">
          {/* Content (Contributor or any other content) */}
          Current Openings
        </div>

        <TableComponent />
        
        <Footer />
      </div>
    )
  }
  