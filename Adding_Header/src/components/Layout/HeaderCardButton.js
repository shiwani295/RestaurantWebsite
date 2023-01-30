import React, { Fragment } from "react";
import CartIcon from "../Card/CartIcon";
import classes from "./HeadCardButton.module.css";

const HeaderCardButton = () => {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </Fragment>
  );
};

export default HeaderCardButton;
