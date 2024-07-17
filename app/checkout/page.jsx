"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";

const CheckOut = () => {
  const user = useAuth();
  if (!user?.sessionId) {
    redirect("/sign-in");
  }

  return <div>checkout</div>;
};

export default CheckOut;
