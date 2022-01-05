import React, { useState, useEffect } from "react";
import "./Nav.css";

export const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png"
        alt="NETFLIX"
      />

      <img
        className="nav_avtar"
        src="https://cdn4.vectorstock.com/i/thumb-large/55/03/profile-photo-placeholder-icon-design-vector-35595503.jpg"
        alt="netflix_logo"
      />
    </div>
  );
};
export default Nav;
