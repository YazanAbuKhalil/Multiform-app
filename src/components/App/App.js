import "./App.css";
import MultiFormMain from "../MultiFormMain/MultiFormMain";
import { useState } from "react";

export default function App() {
  const usersForms = JSON.parse(localStorage.getItem("usersForms"));
  (!usersForms) && localStorage.setItem("usersForms", JSON.stringify([]));

  const [isFinish, setIsFinish] = useState(false);

  const handleRestartForm = () => {
    setTimeout(() => {
      setIsFinish(!isFinish);
    }, 3000);
  };

  return (
    <div className="app">
      {isFinish ? (
        <MultiFormMain key={0} handleRestartForm={handleRestartForm} />
      ) : (
        <MultiFormMain key={1} handleRestartForm={handleRestartForm} />
      )}
    </div>
  );
}
