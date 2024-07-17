"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../(stateStore)/useCart";
import Link from "next/link";
import MyCart from "../(component)/MyCart";

const CartPage = () => {
  return <MyCart />;
};

export default CartPage;
