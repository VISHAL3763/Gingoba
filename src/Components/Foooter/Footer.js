import React from "react";
import "./Footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterRight">
        <p>© 2022 Gingoba Capsules</p>
      </div>
      <div className="FooterLeft">
        <p>
          Made with by <FavoriteIcon htmlColor="RED" /> Vishal Bhardwaj
        </p>
      </div>
    </div>
  );
};

export default Footer;
