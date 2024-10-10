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
                src="https://media.licdn.com/dms/image/v2/D4E03AQE-LLYkVThCpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701820418410?e=1733961600&v=beta&t=xZ5409iJsOntOG26EjkVRmkQxHCCzDlIgInb8wTCKIU"
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
