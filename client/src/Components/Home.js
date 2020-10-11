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
              {/* Welcome to the <br></br> Job Search */}
              MERN Skelton
            </h1>
            {/* <p>
              "Just walk into a place, give the manager a firm handshake, and
              ask for a job" - Parents <br></br>
              Shockingly enough, this method appears to no longer work. This
              site provides some useless job application graphing tools, and
              even less useful tips for actually finding a job.
            </p> */}
            <div className={Styles.flex}>
              <div className={Styles.flexitem}>
                <h4>Back End</h4>
                <ul>
                  <li>Node</li>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>Mongoose</li>
                  <li>JSON Web Tokens</li>
                  <li>Bcrypt</li>
                  <li>Passport</li>
                  <li>Heroku</li>
                  <li>Cookie Parser</li>
                  <li>MongoDB Atlas</li>
                </ul>
              </div>
              <div className={Styles.flexitem}>
                <h4>Front End</h4>
                <ul>
                  <li>React</li>
                  <li>Functional Components</li>
                  <li>Node SASS</li>
                  <li>useEffect, useContext, useState</li>
                  <li>Fetch API</li>
                </ul>
              </div>
              <div className={Styles.flexitem}>
                <h4>About</h4>
                <p>
                  This is a simple React SPA that has a Node and MongoDB Back
                  End. It allows users to submit a registration form, which is
                  sent to the Heroku Node server. The Node server uses Mongoose
                  to query the MongoDB database, which is hosted on Atlas, and
                  registers the user if they do not already exist. Bcrypt is
                  used to salt and hash the users password before storing it in
                  the database.
                </p>
                <p>
                  Login: On submitting a username and password from the React
                  Front End, the Fetch API is used to post it to the Node server
                  API, where Express picks up the requested route. The Node
                  route for "/user/login" has Passport as a middleware. Passport
                  uses the Mongoose Schema for the user database to search for
                  the username. If the username is found, Bcrypt is used to
                  compare the stored hash password with the submitted password.{" "}
                </p>
                <p>
                  Persistence: If Passport authenticates the user, a JWT is
                  generated and signed using the MongoDB unique ID for that user
                  along with a secret environmental variable key. This JWT is
                  returned from the Node server to the React Front End, where it
                  is stored as a cookie.{" "}
                </p>
              </div>
            </div>

            <Link to="/">Test</Link>
          </div>
        </div>
      </div>
      {/* <section className={Styles.overview}>
        <h1>The Situation:</h1>

        <h2>The year is 2020</h2>
        <p>
          Covid has wrecked all your hopes and dreams. <br></br>The economy is
          in shambles. <br></br>Record high unemployment. <br></br>Perfect time
          to job hunt!
        </p>
      </section> */}

      <section className={Styles.timeline}>
        <div className={Styles.timecon}>
          <p>
            Registration: Client uses the registration form and clicks the
            submit button. The React SPA Front End extracts the form data from
            state, and uses the Fetch API to post the data to the Node Back End
            REST API to a route of "/user/registration"
          </p>
          <p>
            The Node server receives the request from the client, and uses
            Express for the routing. Express uses a route for
            '/user/registration' and extracts the username and password from the
            client request. Next it passes it onto Mongoose.
          </p>
          <p> </p>
          <p>
            Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big
            ol pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats
            snoot. I am bekom fat ur givin me a spook length boy wow very biscit
            very good spot.
          </p>
          <p>
            Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super
            chub very good spot, the neighborhood pupper lotsa pats. Borkdrive
            shibe shoober what a nice floof, borking doggo.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
