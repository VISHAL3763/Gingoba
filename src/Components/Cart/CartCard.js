import React from "react";
import classes from "./CartCard.module.css";
import { deleteItem, incQuantity, decQuantity } from "../../store/CartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ id, img, description, priceTotal, quantity }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <div className={classes.img}>
            <img src={img} alt="img1" />
          </div>
          <div className={classes.info}>
            <h3>{description}</h3>
            <p>₹ {priceTotal}</p>
          </div>
        </div>
        <div className={classes.counter}>
          <button onClick={() => dispatch(decQuantity(id))}>-</button>
          <p>{quantity} </p>
          <button onClick={() => dispatch(incQuantity(id))}>+</button>
        </div>
        <div className={classes.button}>
          <button onClick={() => dispatch(deleteItem(id))}>delete</button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
