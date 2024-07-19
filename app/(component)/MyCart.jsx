"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { delete_from_cart } from "../hocks/delete_from_cart";

const MyCart = () => {
  // const disCartState = useCart((state) => state.dis);

  // get cart from local storge
  // const cart = JSON.parse(localStorage.getItem("shopingCart"));
  // const cart = [
  //   { name: "qqq", ex_price: 20, current_price: 20, timeInMonth: 3, id: 90 },
  // ];
  // state to hold the cart
  const [cartState, setCartState] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("shopingCart"));
    setCartState(cart);
  }, [setCartState]);
  // if empty cart return early
  if (cartState.length === 0) {
    return (
      <div className="bg-primary flex flex-col gap-56 h-screen p-6">
        <header className="text-center">
          <h1 className="text-xl font-bold  sm:text-3xl text-white">
            سلة المشتريات
          </h1>
        </header>
        <div className="flex w-full justify-center flex-col align-middle ">
          <h1 className="text-center text-white">سلة المشتريات فارغة</h1>
          <h1 className="text-center text-white">اضف بعض المنتجات</h1>
          <Link className="text-center m-auto mt-5" href={"/"}>
            <Button title={"تسوّق الآن"} />
          </Link>
        </div>
      </div>
    );
  }
  // calculate total price
  function getTotalPrice() {
    let total = 0;
    for (let i = 0; i < cartState.length; i++) {
      total = total + cartState[i].current_price;
    }
    return total;
  }
  const total = getTotalPrice();

  //delete from cart
  function deleteItem(i) {
    const newCart = [...cartState];
    newCart.splice(i, 1);
    localStorage.setItem("shopingCart", JSON.stringify(newCart));

    setCartState(newCart);
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              سلة المشتريات
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cartState.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4 ">
                    <img
                      src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt=""
                      className="size-16 rounded object-cover"
                    />

                    <div className="flex items-center flex-col justify-center">
                      <h3 className="text-sm text-gray-900 ">{item?.name}</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>
                          <dd className="inline"> شهر</dd>
                          <dt className="inline">{item?.timeInMonth} </dt>
                        </div>

                        {/* <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div> */}
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      {/* <form>
                        <label htmlFor="Line3Qty" className="sr-only">
                          {" "}
                          Quantity{" "}
                        </label>

                        <input
                          type="number"
                          min="1"
                          id="Line3Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        />
                      </form> */}

                      <button className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                          onClick={() => deleteItem(index)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between flex-row-reverse ">
                    <dt>المجموع</dt>
                    <dd>SR {total}</dd>
                  </div>

                  <div className="flex justify-between flex-row-reverse ">
                    <dt>الخصم</dt>
                    <dd>-SR {total / 5}</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium flex-row-reverse ">
                    <dt>الإجمالي</dt>
                    <dd>SR {total - total / 5}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs">
                      2 Discounts Applied
                    </p>
                  </span>
                </div>

                <div className="flex justify-end w-full">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600"
                  >
                    إنتقل للدفع
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
