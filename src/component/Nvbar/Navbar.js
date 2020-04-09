import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./navbar.css";
import DrawerButton from "../SideDrawer/DrawerButton";

class Navbar extends Component {
  constructor() {
    super();
    this.state = { scrolled: false };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 150;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div>
        <header
          className={this.state.scrolled ? "navbar scrolled" : "navbar "}
          style={{ position: "fixed" }}
        >
          <nav className="navbar-navigation">
            <div className="not-visibal-button">
              <DrawerButton click={this.props.DrawerClickHandler} />
            </div>
            <div className="navbnpm ar-logo navbar-logo">
              <a href="..">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="navbar-items">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="..">ACCUEIL </a>
                </li>
                <li>
                  <a href="..">À PROPOS </a>
                </li>
                <li>
                  <a href="..">ÉVÈNEMENTS PROCHE </a>
                </li>
                <li>
                  <a href="..">ORGANISATEUR </a>
                </li>
                <li>
                  <a href="..">GALLERIE </a>
                </li>
                <li>
                  <a href="..">ÉVÈNEMENT </a>
                </li>
                <li>
                  <a href="..">CONTACT </a>
                </li>
                
                <li className="connexion">
                  <a href="..">CONNEXION </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;