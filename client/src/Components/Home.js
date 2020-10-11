import React from "react";
import { Link } from "react-router-dom";
import Styles from "./home.module.scss";
import Shape1 from "../images/minee.png";
import Hero from "../images/hero.svg";
const Home = () => {
  return (
    <div className={Styles.conman}>
      <img className={Styles.shape1} src={Shape1} alt="shape"></img>
      <div className={Styles.mainhero}>
        <img className={Styles.hero} src={Hero} alt="shape"></img>
        <div className={Styles.center}>
          <div className={Styles.centertext}>
            <h1>
              Welcome to the <br></br> Job Search
            </h1>
            <p>
              "Just walk into a place, give the manager a firm handshake, and
              ask for a job" - Parents <br></br>
              Shockingly enough, this method appears to no longer work. This
              site provides some useless job application graphing tools, and
              even less useful tips for actually finding a job.
            </p>
            <Link to="/">Test</Link>
          </div>
        </div>
      </div>
      <section className={Styles.overview}>
        <h1>The Situation:</h1>

        <h2>The year is 2020</h2>
        <p>
          Covid has wrecked all your hopes and dreams. <br></br>The economy is
          in shambles. <br></br>Record high unemployment. <br></br>Perfect time
          to job hunt!
        </p>
      </section>
    </div>
  );
};

export default Home;
