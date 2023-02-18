import React from "react";
import SideBar from "./SideBar";

const FlipElement = ({ title }) => {
  return <li>{title}</li>;
};

const MainContent = () => {
  return (
    <div className="content">
      <main className="main-area">
        <img src="../images/welcome_text.png" />
        <div className="text">
          <h4 className="wordCarousel">
            <span>one</span>
            <div>
              <ul className="flip5">
                <FlipElement title="mission" />
                <FlipElement title="team" />
                <FlipElement title="aoo" />
                <FlipElement title="mission" />
                <FlipElement title="team" />
              </ul>
            </div>
          </h4>
        </div>
      </main>
      <SideBar />
    </div>
  );
};

export default MainContent;
