import React from "react";
import classes from "./DeleteAllSellerProducts.module.css";
export default function DeleteAllSellerProducts(props) {
  return (
    <div className={`${classes.modal} ${classes.card}`}>
      <header className={classes.header}>
        <h2>Are you sure you want to delete all products?</h2>
      </header>
      <div className={classes.content}>
        <p> Are you sure?</p>
      </div>
      <footer className={classes.actions}>
        <button className= {classes.button} onClick = {props.cancelFunc}> No</button>
        <button className= {classes.button} onClick = {props.okayFunc}>  Yes</button>
      </footer>
    </div>
  );
}