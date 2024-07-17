"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Link from "next/link";
import icone from "../../public/hamburger.png";
import Image from "next/image";

const Header = () => {
  // const counter = useCart((state) => state.counter);

  return (
    <header className="flex justify-between p-5 bg-primary">
      <div className="flex align-baseline">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="p-2 rounded-lg m-auto bg-secandry justify-center text-white text-xl">
            <Link className="text-sm/12 rounded" href={"/sign-in"}>
              تسجيل الدخول
            </Link>
          </div>
        </SignedOut>
      </div>
      <Image src={icone} height={20} width={35} alt="img" />
    </header>
  );
};

export default Header;
