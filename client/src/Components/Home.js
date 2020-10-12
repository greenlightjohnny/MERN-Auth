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
        {/* <img className={Styles.hero} src={Hero} alt="shape"></img> */}
        <div className={Styles.center}>
          <div className={Styles.centertext}>
            <h1>
              {/* Welcome to the <br></br> Job Search */}
              MERN Skelton
            </h1>
            <p>
              Node REST API for registration and authentication/authorization to
              protected resources. A separate MongoDB server stores user
              credentials and user specific data. Uses JWTs for session
              persistence, Express for routing, Mongoose for MongoDB Schemas and
              connectivity, Passport for authentication help, Bcrypt for
              password hashing, and of course a React SPA for the Front End
              using all functional components and the useContext Hook for global
              state management.
            </p>
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
              {/* <div className={Styles.flexitem}>
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
              </div> */}
            </div>

            {/* <Link to="/">Test</Link> */}
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
          <h2>Flow</h2>
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
            client request. Next it passes it onto Mongoose. The Node server
            uses the a Mongoose Schema for the user and Mongoose connects to the
            separate MongoDB database server, Atlas in this case.
          </p>
          <p>
            {" "}
            The database server is searched by Mongoose to see if the user
            already exists. If not Mongoose uses Bcrypt to salt and hash the
            password before storing it into the MongoDB database.{" "}
          </p>
          <p>
            If the user is registered successfully, the Node server returns a
            success message to the React client and the user is redirected to
            the login page after displaying a success message. At the login page
            the client can enter their username and password, which will send
            another Fetch API post request to the Node server.
          </p>
          <p>
            The Node server REST API again receives a post request from the
            client, and this time it is to the '/user/login' route which Express
            handles. Express extracts the username and password from the client
            request and passes to Mongoose.
          </p>
          <p>
            Mongoose connects to the database, and first checks to see if the
            username exists. If so, it compares the hashed and salted password
            with the one provided by the client to see if they match. If they
            do, it returns a message to the Node server with the ID of the user
            and a message saying they are authenticated.
          </p>
          <p>
            The Node server now uses a secret key along with the ID of the user
            to create and sign a JWT. It sends this token back to the client,
            with instructions to set it as a cookie and send it with every
            request to the server. Over HTTPS only, of course.
          </p>
          <p>
            The client receives a reply from the Node server with the JWT cookie
            and a message that the client is now authorized to view protected
            routes. The client is logged in and sent to the list page, which is
            a simple "to do" app. Here the client can add items to the list,
            which are sent to the Node server and onto be saved on the Atlas
            MongoDB server.
          </p>
          <h2>Finish!</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
