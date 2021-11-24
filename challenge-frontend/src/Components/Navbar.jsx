import React from "react";
import "./Styles/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import DivButton from "./DivButton";

const Navbar = () => {
  const { logout } = useAuth0();

  return (
    <div className="NavbarContainer container-fluid">
      <div className="row">
        <div className="col">
          <DivButton className="NavbarTitle">TwitterClone</DivButton>
        </div>

        <div className="col" id="LogoutText">
          <button
            onClick={() => {
              logout();
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
