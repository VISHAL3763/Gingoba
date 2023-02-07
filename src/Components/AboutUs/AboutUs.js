import React from "react";
import "./AboutUs.css";
import Ronaldo from "../../Assets/Images/Ronaldo.png";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUsRight">
        <span className="AboutUsText">
          Prepare your Body <br /> for a Passionate <br /> Workout.
        </span>
        <span className="AboutUsText2">
          Brown boys are a great attraction for all around the world. I am not
          boasting here, but the use of GINGOBA for generationsin our culture
          may have influenced it in some way.
        </span>
        <button className="AboutUsSignUpBtn">SignUp Now</button>
      </div>
      <div className="AboutUsLeft">
        <img src={Ronaldo} alt="RonaldoImage" height={500} width={400} />
      </div>
    </div>
  );
};

export default AboutUs;
