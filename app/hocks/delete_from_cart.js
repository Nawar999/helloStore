import { useEffect } from "react";

export const delete_from_cart = (cart) => {
  useEffect(() => {
    localStorage.setItem("shopingCart", JSON.stringify(cart));
  }, []);
};
