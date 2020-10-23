import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoutBtn } from "../LogoutBtn";
import SkipLink from "./SkipLink";

const paths = [
  {
    key: 1,
    path: "#main",
    name: "Saltar al contenido principal",
  },
];

const Navbar = () => {

  const {checking} = useSelector(state => state.auth)

  return (
    <>
      <SkipLink paths={paths} />
      <header>
        <div className="header__container l-flex-header">
          <ul className="header-title__container l-flex-header">
            <li>
              <Link to="/" className="home">
                Always<span>Update</span>
              </Link>
            </li>          
            <li className="login__container-navbar">
              <Link to="/login" className="header__title-right">
                {
                  (checking) 
                  ? 
                  <button className="header__title-right-button" type="submit">
                    Log in
                  </button>
                  : <LogoutBtn />
                }
                
              </Link>
              <Link to="/register" className="header__title-right">
                Sing up
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
