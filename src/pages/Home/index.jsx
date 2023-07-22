import React from "react";
import "../../styles/Home.css";
import About from "../../components/About";
import MyImage from "../../components/MyImage";
import SvgBackground from "../../images/SvgBg.webp";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="box-container-left box">
        <About />
      </div>
      <div className="box-container-rigth box">
        <MyImage />
        <img src={SvgBackground} alt="SvgBg" className="svg-bg" />
      </div>
    </div>
  );
}
