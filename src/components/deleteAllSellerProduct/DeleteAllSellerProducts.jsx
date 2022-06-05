import React from "react";
import classes from "./deleteAllSellerProduct.module.css";
export default function DeletePro(props) {
  // return(
  //     <div style="
  //     background-color: rgb(70, 70, 78);
  //     border: solid rgb(255, 193, 7);
  //     border-radius: 1rem;
  //     text-align:center;
  //     margin: 1rem;
  //     padding: 3rem;
  //     position: absolute;
  //     left: 50%;
  //     top: 50%;
  //     transform: translate(-50%,-50%);
  //     ">
  //         <p style="
  //         color:white;
  //         ">Are you sure you want to delete all products?</p>
  //         <button
  //         style="
  //         border-radius: 0.5rem;
  //         padding: 0.5rem;
  //         width: 4rem;
  //         "
  //         onMouseOut="this.style.backgroundColor='#F8F8F8'"
  //         onMouseOver="this.style.backgroundColor='rgb(255, 193, 7)'"
  //         >Yes</button>
  //         <button style="
  //         background-color: rgb(255, 193, 7);
  //         border-radius: 0.5rem;
  //         padding: 0.5rem;
  //         width: 4rem;
  //         "
  //         onMouseOver="this.style.backgroundColor='#F8F8F8'"
  //         onMouseOut="this.style.backgroundColor='rgb(255, 193, 7)'">No</button>
  //     </div>
  // )
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
