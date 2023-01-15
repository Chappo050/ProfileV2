import { useOutletContext } from "react-router-dom";
import text from "../TextObjects/Home";
const Home = () => {
  const { isToggled } = useOutletContext<{ isToggled: boolean }>();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{isToggled ? text.english.greeting: text.japanese.greeting}</h1>
          <p className="py-6 text-xl">
          {isToggled ? text.english.text: text.japanese.text}
          </p>
          <a href="/projects"> <button className="btn btn-primary">{isToggled ? text.english.btn: text.japanese.btn}</button></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
