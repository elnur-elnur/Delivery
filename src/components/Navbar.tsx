import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* Left Links */}
      <div className="hidden md:flex gap-4">
        <Link href="/">homepage</Link>
        <Link href="/">homepage</Link>
      </div>
      {/* Logo */}
      <div className="text-sm">
        <Link href="/" className="flex items-center">
          <Image src="/del.png" alt="" width={20} height={20} />
          <span className="ml-2">ButtaDel</span>
        </Link>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+994(70)6303525</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
