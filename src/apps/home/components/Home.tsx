import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <h1>Welcome</h1>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.cardImg}>
              <img
                src="/profile_pic.jpeg"
                className={classes.img}
                alt="profile"
              />
            </div>
            <div className={classes.cardBody}>
              <h3>Naim Sedan</h3>
              <p>Front-End Engineer</p>
              <small>Based in Glasgow, United Kingdom</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
