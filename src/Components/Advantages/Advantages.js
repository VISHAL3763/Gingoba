import React from "react";
import "./Advantages.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import AdjustIcon from "@mui/icons-material/Adjust";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const Advantages = () => {
  return (
    <div className="Advantages">
      <div className="AdvantagesTop">
        <span className="AdvantagesTopText">
          Grow up <br />
          your superpowers
        </span>
      </div>
      <div className="AdvantagesMiddle">
        <span className="Stamina">
          <p>
            <FavoriteIcon htmlColor="RED" />
          </p>
          <b>Stamina</b>
          <p>
            the ability to do something that involves a lot of physical effort
            for a long time
          </p>
        </span>
        <span className="Passionate">
          <p>
            {" "}
            <HighlightAltIcon htmlColor="blue" />
          </p>
          <b>Passionate</b>
          <p>showing or caused by very strong feelings</p>
        </span>
        <span className="Competitive">
          <p>
            <AdjustIcon htmlColor="yellowgreen" />
          </p>
          <b>Competitive</b>
          <p>able to be as successful as or more successful than others</p>
        </span>
        <span className="Part">
          <p>
            <AssignmentTurnedInIcon htmlColor="orange" />
          </p>
          <b>Persistant</b>
          <p>lasting for a long time or happening often</p>
        </span>
      </div>
      <div className="AdvantagesBottom">
        <button className="AdvantagesButton">SignUp Now</button>
      </div>
    </div>
  );
};

export default Advantages;
