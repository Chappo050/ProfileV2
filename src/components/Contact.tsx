import text from "../TextObjects/Contact";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { useOutletContext } from "react-router-dom";
const Contact = () => {
  const { isToggled } = useOutletContext<{isToggled: boolean}>();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">{isToggled ? text.english.title :  text.japanese.title}</h1>
          <h2 className="py-6 text-xl font-bold">{isToggled ? text.english.text:  text.japanese.text}</h2>
          <div className="flex gap-5">

      
          <HiOutlineMail size={25}/>
          <a
            className="hover:underline hover:text-slate-700"
            href={`mailto:matthewchaplin60@gmail.com?subject=Inquiry_Message`}
          >
            matthewchaplin60@gmail.com
          </a>
          </div>
          <div className="flex justify-center gap-10 p-5 ">
            <a
              href="https://github.com/Chappo050" target="_blank"
              className="text-4xl md:text-6xl hover:text-slate-700"
            >
              {" "}
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-chaplin-dev/" target="_blank"
              className="text-4xl md:text-6xl hover:text-slate-700"
            >
              {" "}
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
