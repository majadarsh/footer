import React, { Component } from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Toolset from "./Toolset/SpecialisedToolsets";
import "bootstrap/dist/css/bootstrap.css";
import Subscribe from "./Subscribe/Subscribe";

import Navigateup from "./Navigateup";
import "./App.css";
import "./Responsive.css";
import Video from "./Video/WatchVideo";
import Footer from "./Footer/Footer";
import MFooter from "./Footer/Mobilefooter";
import Copyright from "./Footer/Copyright";
import Mtoolset from "./Toolset/Features_mobile_page";
import MobFeatures from "./Features/Features";
import Features from "./Features/MoreFeatures";

import Newfooter from './Footer/Newfooter'
class App extends Component {
  constructor() {
    super();
    this.state = {
      showSubscribebtn: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    var body = document.body;
    var scollbtndisplay = body.offsetHeight / 2.2;
    if (window.pageYOffset > scollbtndisplay) {
      this.setState({
        showSubscribebtn: false
      });
    } else {
      this.setState({
        showSubscribebtn: true
      });
    }
  }

  render() {
    return (
      <div
        className="App"
        ref={el => {
          this.app = el;
        }}
      >
        <Header />
        <Banner />
        <Toolset />
        <Mtoolset />
        <Video />
        <Features />
        <MobFeatures />
        <Subscribe subscribebtn={this.state.showSubscribebtn} />
        <Newfooter />
        <MFooter />
        <Copyright />
        <Navigateup />

      </div>
    );
  }
}

export default App;
