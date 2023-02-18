import React from "react";
import Links from "./Links";

const SideBarLink = ({ title, url }) => {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
};

const SideBarLinkGroup = ({ links, itemNo }) => {
  const filteredArray = links.filter(
    (el, index) => index >= itemNo[0] && index <= itemNo[1]
  );
  return (
    <ul>
      {filteredArray.map((el) => (
        <SideBarLink title={el.title} url={el.url} key={el.key} />
      ))}
    </ul>
  );
};
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="squish-container">
        <nav className="example-menu">
          <SideBarLinkGroup links={Links} itemNo={[0, 4]} />
        </nav>
        <nav className="example-menu">
          <SideBarLinkGroup links={Links} itemNo={[5, 9]} />
        </nav>
      </div>
    </div>
  );
};
export default SideBar;
