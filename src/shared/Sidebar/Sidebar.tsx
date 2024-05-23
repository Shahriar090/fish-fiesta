"use client";
import { navItems } from "@/components/Navbar/navItems";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className="w-full h-full bg-slate-50  pt-44 hidden lg:block">
        <div className="logo pl-5">
          <h1 className="text-2xl font-semibold">
            Bounty <span className="text-green-500">Basket</span>
          </h1>
        </div>

        <div className="dashboard-items pt-8 pl-5">
          <li className="text-black font-medium uppercase">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="text-black font-medium uppercase">
            <Link href="/dashboard/all-products">All Products</Link>
          </li>
        </div>
      </div>

      {/* mobile drawer */}
      <div className="lg:hidden pt-20">
        <button onClick={handleDrawerToggle} className="text-4xl">
          {isMobileMenuOpen ? (
            <MdClose className="text-red-500" />
          ) : (
            <MdMenu className="text-green-500" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className=" top-10 right-0 z-20 w-full h-full">
          <div className="nav-items flex flex-col items-center gap-5">
            <li className="text-black font-medium uppercase">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="text-black font-medium uppercase">
              <Link href="/dashboard/all-products">All Products</Link>
            </li>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
