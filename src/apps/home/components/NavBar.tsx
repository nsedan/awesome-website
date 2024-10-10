import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const { pathname } = useLocation();
  const linksColor =
    pathname === "/"
      ? classes.light
      : classes.dark;

  return (
    <div className={`${classes.navBar} ${linksColor}`}>
      <Link className={classes.navLink} to="/">
        Home
      </Link>
      <Link className={classes.navLink} to="/todo">
        Maxify
      </Link>
    </div>
  );
};

export default NavBar;
