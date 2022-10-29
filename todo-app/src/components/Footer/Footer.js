import React from "react";
import "./Footer.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>Được thực hiện bởi: </p>
        <a
          href="https://github.com/4501104009/Todo-App"
          target="_blank"
          className="profile-1"
        >
          Nguyễn Thị Vân Anh
        </a>
      </div>
    </div>
  );
};

export default Footer;
