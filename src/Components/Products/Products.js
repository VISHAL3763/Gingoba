import React from "react";
import "./Products.css";
// import ViratKohli from "../../Assets/Images/ViratKohli.jpg";
import AdvertisementsData from "../../DummyData/AdvertisementsData";

const Products = () => {
  return (
    <div className="Products">
      <div className="ProductsTop">
        <h1>Our Brand Ambassadors</h1> <br />
        <p>They all are Motivation for the youth.</p>
        <br />
      </div>
      <div className="ProductBottom">
        {AdvertisementsData.map((val, id) => {
          return (
            <div class="Productcard">
              <img src={val.img} alt="Avatar" width={373} height={430} />
              <div class="container">
                <h4>
                  <b>{val.name}</b>
                </h4>
                <p>{val.Designation}</p>
                <div className="Productdescription">
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
