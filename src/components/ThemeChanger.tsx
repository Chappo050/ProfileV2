import { useEffect } from "react";
//@ts-ignore
import { themeChange } from "theme-change";

const ThemeChanger = () => {
  useEffect(() => {
    themeChange(false);
  });
  return (
    <select data-choose-theme className="bg-white text-black w-full">
      <option value="wireframe">Wireframe</option>
      <option value="dark">Dark</option>
      <option value="forest">Forest</option>
      <option value="synthwave">Synthwave</option>
      <option value="luxury">Luxury</option>
    </select>
  );
};

export default ThemeChanger;
