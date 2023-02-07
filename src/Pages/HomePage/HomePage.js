import React from "react";
import "./HomePage.css";
import Header from "../../Components/Header/Header";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Advantages from "../../Components/Advantages/Advantages";
import Products from "../../Components/Products/Products";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Advertisements from "../../Components/Advertisement/Advertisement";
import Footer from "../../Components/Foooter/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Advantages />
      <Advertisements />
      <ContactUs />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
