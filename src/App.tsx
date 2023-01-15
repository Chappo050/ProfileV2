import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
function App() {
  const [isToggled, setToggled] = useState(true);
  const toggleSwitch = () => setToggled(!isToggled);
  return (
    <div className="flex">
      <SideBar toggleSwitch={toggleSwitch} isToggled={isToggled} />

      <Outlet context={{isToggled:isToggled}} />
    </div>
  );
}

export default App;
