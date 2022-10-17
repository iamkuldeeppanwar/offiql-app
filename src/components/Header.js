import React from "react";
import "./Header.css";
import Git_icon from "../assets/Vector2.png";
import Git from "../assets/GitHub.png";
import Docs_icon from "../assets/Vector.png";
import Docs from "../assets/Docs.png";
import SignIn_icon from "../assets/Vector3.png";
import Signin from "../assets/Sign In.png";

function Header() {
  return (
    <div className="Header">
      <div className="grid-item">
        <img className="icons" src={Git_icon} alt="...img" />
        <span className="icons_name">
          <img src={Git} alt="...img" />
        </span>
      </div>
      <div className="grid-item">
        <img className="icons" src={Docs_icon} alt="...img" />
        <span className="icons_name">
          <img src={Docs} alt="...img" />
        </span>
      </div>
      <div className="grid-item">
        <img className="icons" src={SignIn_icon} alt="...img" />
        <span className="icons_name">
          <img src={Signin} alt="...img" />
        </span>
      </div>
    </div>
  );
}

export default Header;
