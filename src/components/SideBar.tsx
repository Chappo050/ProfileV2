import { useState } from "react";
import { Link } from "react-router-dom";
import headshot from "../assets/me.jpeg";
import ThemeChanger from "./ThemeChanger";
import Toggle from "./Toggle";
const SideBar = ({isJapanese, toggleSwitch}:any) => {


  return (
    <ul className="menu bg-base-300 w-48 h-screen border-r border-base-200 text-xl text-center z-40">
      <img
        src={headshot}
        alt="profile picture"
        className="mask mask-squircle"
      />
      <span className="border-b border-base-200 text-3xl pb-32">
        MATTHEW CHAPLIN
      </span>
      <li className=" border-t border-primary">
        <Link to="/">Home</Link>
      </li>
      <li className="border-t border-primary">
        <Link to="about">About Me</Link>
      </li>
      <li className="border-t border-primary ">
        <Link to="projects"> Projects</Link>
      </li>

      <li className="border-t border-primary">
        <Link to="education">Education</Link>
      </li>
      <li className="border-t border-b border-primary">
        <Link to="contact">Contact</Link>
      </li>

      <span className="flex flex-col pt-40">
        Theme:
        <ThemeChanger/>
      </span>
      <div className="z-50">
       
        <Toggle isToggled={isJapanese} setToggled={toggleSwitch} />
      </div>
    </ul>
  );
};

export default SideBar;
