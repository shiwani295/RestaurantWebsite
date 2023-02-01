import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeadCardButton.module.css";

const HeaderCardButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
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
