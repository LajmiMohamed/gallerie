import React, { Component } from "react";
import Navbar from "./component/Nvbar/Navbar";
import SideDrawer from "./component/SideDrawer/SideDrawer";
import BackDrop from "./component/Back-Drop/Back-Drop";
import Middgallerie from "./component/middgallerie/middgallerie";
import Footer from "./component/footer/footer"

export default class App extends Component {
  state = {
    SideDrawerOpen: false
  };
  DrawerToogleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  BackDropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let BackDrop1;
    if (this.state.SideDrawerOpen) {
      BackDrop1 = <BackDrop click={this.BackDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Navbar DrawerClickHandler={this.DrawerToogleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {BackDrop1}
        <Middgallerie />
<Footer />
      
      </div>
    );
  }
}
