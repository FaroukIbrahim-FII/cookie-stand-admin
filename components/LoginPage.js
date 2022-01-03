import React from "react";
import LoginForm from "./LoginForm1"

// components

import Navbar from "./Navbars/AdminNavbar.js";
import FooterSmall from "./Footers/FooterSmall.js";

export default function Login(props) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "",
            }}
          ></div>
          <LoginForm
          submitHandler={props.submitHandler}
          />
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}