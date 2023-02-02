import React from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const addItemToCartHandler = () => {};
  const hideCartHandler = () => {};

  const cartContext = {
    item: [],
    totalamount: 0,
    addItem: addItemToCartHandler,
    removeItem: hideCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
