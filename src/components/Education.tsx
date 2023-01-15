import { useOutletContext } from "react-router-dom";
import text from "../TextObjects/Education";
const Education = () => {
  const { isToggled } = useOutletContext<{ isToggled: boolean }>();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">
            {isToggled ? text.english.title : text.japanese.title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="py-6 text-xl font-bold">
                {isToggled
                  ? text.english.programming.title
                  : text.japanese.programming.title}
              </h2>
              <p className="">
                {" "}
                {isToggled
                  ? text.english.programming.fullstack.text
                  : text.japanese.programming.fullstack.text}
              </p>
              <p className="">
                {" "}
                {isToggled
                  ? text.english.programming.other.text
                  : text.japanese.programming.other.text}
              </p>
            </div>

            <div>
              <h2 className="py-6 text-xl font-bold">
                {isToggled
                  ? text.english.university.bachelor.title
                  : text.japanese.university.bachelor.title}
              </h2>
              <p className="">
                {" "}
                {isToggled
                  ? text.english.university.bachelor.text
                  : text.japanese.university.bachelor.text}
              </p>

              <h2 className="py-6 text-xl font-bold">
                {isToggled
                  ? text.english.university.honours.title
                  : text.japanese.university.honours.title}
              </h2>
              <p className="">
                {" "}
                {isToggled
                  ? text.english.university.honours.text
                  : text.japanese.university.honours.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
