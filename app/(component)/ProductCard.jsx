import React from "react";
import Link from "next/link";
const ProductCard = ({
  name,
  ex_price,
  current_price,
  timeInMonth,
  product,
  id,
}) => {
  // const incrementCartState = useCart((state) => state.inc);
  function handleClick(product) {
    let exCart = [];
    localStorage.getItem("shopingCart") === null
      ? localStorage.setItem("shopingCart", JSON.stringify(product))
      : (exCart = JSON.parse(localStorage.getItem("shopingCart")));

    exCart[exCart.length] = product;
    localStorage.setItem("shopingCart", JSON.stringify(exCart));
    // incrementCartState();
  }
  return (
    <div className="group relative block overflow-hidden bg-secandry mb-2 rounded">
      <Link href={`/product_details/${id}`}>
        <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
          <span className="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />
      </Link>
      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          {" "}
          New{" "}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>

        <p className="mt-1.5 text-sm text-gray-700">SR {current_price}</p>

        <form className="mt-4">
          <button
            type="button"
            onClick={() => handleClick(product)}
            className="block w-full rounded bg-sky-300 p-4 text-sm font-medium transition hover:scale-105 z-10"
          >
            أضف للسلة
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
