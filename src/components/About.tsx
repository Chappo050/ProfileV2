import { useOutletContext } from "react-router-dom";
import text from "../TextObjects/About";

const About = () => {
  const { isToggled } = useOutletContext<{isToggled: boolean}>();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">{ isToggled ? text.english.title : text.japanese.title}</h1>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h2 className="py-6 text-xl font-bold">
                {isToggled ? text.english.whyProg.title :text.japanese.whyProg.title }
              </h2>
              <p className="">  {isToggled ? text.english.whyProg.text :text.japanese.whyProg.text }</p>
            </div>

            <div>
              <h2 className="py-6 text-xl font-bold">
              {isToggled ? text.english.hobbies.title :text.japanese.hobbies.title }
              </h2>
              <p className="">  {isToggled ? text.english.hobbies.text :text.japanese.hobbies.text }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
