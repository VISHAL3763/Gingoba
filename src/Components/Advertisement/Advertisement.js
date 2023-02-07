import React from "react";
import "./Advertisement.css";
// import Ronaldo from "../../Assets/Images/Ronaldo.png";
import ProductsData from "../../DummyData/ProductsData";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteItem } from "../../store/CartSlice";

const Advertisement = () => {
  const item = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();
  return (
    <div className="Advertisements">
      <div className="AdvertisemetsTop">
        <h1>Our Products</h1> <br />
        <p>We track the markets daily and know where the savings are.</p>
        <br />
      </div>
      <div className="AdvertisementsBottom">
        {ProductsData.map((val, id) => {
          console.log(val.id);
          return (
            <div class="Advertisementcard" key={val.id}>
              <img src={val.img} alt="Avatar" width={300} height={430} />
              <div class="container">
                <h4>
                  <b>{val.name}</b>
                </h4>
                <p>{val.description}</p>
                <div className="Productdescription">
                  <p>
                    M.R.P. : Rs. {val.mrp} /- <br />
                    Size : {val.size}FootBall
                  </p>
                  <p>
                    {item.some((valnew) => valnew.id === val.id) ? (
                      <button onClick={() => dispatch(deleteItem(val.id))}>
                        delete
                      </button>
                    ) : (
                      <button
                        className="cartbutton"
                        onClick={() => dispatch(add(val))}
                      >
                        Add to Cart
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Advertisement;

/* <div class="Advertisementcard">
<img src={Ronaldo} alt="Avatar" width={300} height={430} />
<div class="container">
  <h4>
    <b>FootBall</b>
  </h4>
  <p>Branded in Market</p>
  <div className="Productdescription">
    <p>
      M.R.P. : Rs. 380 /- <br />
      Size : 1 FootBall
    </p>
    <p>
      Add Quantity : <button>-</button> 1 <button>+</button>
    </p>
    <p>
      <button>Add TO cart</button>
    </p>
  </div>
</div>
</div> */
