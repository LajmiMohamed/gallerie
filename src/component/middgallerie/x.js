import React, { Component } from "react";
import logo from "../logo512.png";
import YouTube from "react-youtube";
import "../styles/JsxChek.css";
export default class JsxChek extends Component {
  render() {
    return (
      <div className="box">
        <div style={{ border: "solid 1px", maxWidth: "110vw" }}>
          <h1 className="titleRed">Jasser</h1>
          <br />
          <img src="/logo192.png" alt="logoReact" width={320} height={240} />
          <br />
          <img
            src={logo}
            alt="logoReact"
            width={320}
            height={240}
            style={{ border: "dashed 4px green", boxShadow: "0 5px green" }}
          />
        </div>
        

        <YouTube videoId={"9GtB5G2xGTY"} />
      </div>
    );
  }
}