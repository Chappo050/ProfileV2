import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link, useOutletContext } from "react-router-dom";

const Hamburger = ({isToggled}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const language = {
    english: {
      top: "Home",
      projects: "Projects",
      education: "Education",
      about: "About",
      contact: "Contact",
    },
    japanese: {
      top: "トップ",
      projects: "プロジェクト",
      education: "教育",
      about: "私について",
      contact: "コンタクト",
    },
  };

  return (
    <div className="fixed bg-opacity-0 top-0 left-0 bg-base-200 md:py-2 scroll-smooth z-50  lg:hidden ">
      <button className="  text-3xl m-2" onClick={() => setIsOpen(true)}>
        <FaHamburger />
      </button>
      <div
        className={`fixed z-30 inset-y-0 left-0 w-32 px-8 py-4 bg-gray-100 border-r overflow-auto lg:static  lg:inset-auto lg:translate-x-0 transform ${
          isOpen
            ? "translate-x-0 ease-out transition-medium"
            : "-translate-x-full ease-in transition-medium"
        }`}
      >
        <div className="-mx-3 pl-3 pr-1 flex items-center justify-between">
          <span />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 lg:hidden"
          >
            <svg fill="none" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M6 18L18 6M6 6L18 18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-10 flex flex-col gap-10 items-center justify-between text-2xl">
        <Link to='/'
            onClick={(e) => {
              setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
            {isToggled ? language.japanese.top : language.english.top}
          </Link>
          <Link to='projects'
            onClick={(e) => {
              setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
            {isToggled ? language.japanese.projects : language.english.projects}
          </Link>
          <Link to='education'
            onClick={(e) => {
              setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
             {isToggled ? language.japanese.education : language.english.education}
          </Link>
          <Link
          to="about"
            onClick={(e) => {
       setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
            {isToggled ? language.japanese.about : language.english.about}
          </Link>
          <Link
          to="contact"
            onClick={(e) => {
              setIsOpen(false);
            }}
            className=" rounded-full md:py-1 md:mx-5"
          >
            {isToggled ? language.japanese.contact : language.english.contact}
          </Link>
          <a href="https://github.com/Chappo050" className="text-4xl">
            {" "}
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-chaplin-dev/"
            className="text-4xl"
          >
            {" "}
            <BsLinkedin />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Hamburger;